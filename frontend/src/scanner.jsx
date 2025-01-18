import React, { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import './scanner.css'
const CustomQRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(""); // Stores scanned dish name
  const [validItems, setValidItems] = useState([]); // Stores only valid dish items
  const [selectedItems, setSelectedItems] = useState({}); // Stores selected items & their quantities
  const [caloriesData, setCaloriesData] = useState({}); // Stores calories per item
  const [imgUrl, setImgUrl] = useState(""); // Stores ONLY ONE image URL
  const qrCodeRef = useRef(null);

  const startScanning = () => {
    setResult("");
    setValidItems([]);
    setSelectedItems({});
    setCaloriesData({});
    setImgUrl(""); // Reset image before new scan

    if (!qrCodeRef.current) {
      qrCodeRef.current = new Html5Qrcode("qr-reader");
    }

    qrCodeRef.current
      .start(
        { facingMode: "environment" }, // Use rear camera
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          setResult(decodedText);
          stopScanning();
          getCalories(decodedText);
        },
        (errorMessage) => {
          console.log("QR Code scan failed: ", errorMessage);
        }
      )
      .then(() => setScanning(true))
      .catch((err) => console.error("Error starting scanner:", err));
  };

  const stopScanning = () => {
    if (qrCodeRef.current) {
      qrCodeRef.current.stop().then(() => {
        setScanning(false);
      });
    }
  };

  // ✅ Fetches calorie data & selects only valid items
  async function getCalories(dish) {
    const itemWords = dish.split(" "); // Split dish name into individual items

    try {
      const response = await fetch("https://sd-project-5-3438.onrender.com/allDish");
      const rdata = await response.json();
      const dishesObject = rdata["dishes"];

      let caloriesInfo = {};
      let firstImageUrl = ""; // Store only one image URL
      let foundItems = [];

      // Loop through each dish item and fetch its data
      for (const word of itemWords) {
        const matchedDish = dishesObject.find((dish) => dish["dish_name"] === word);
        if (matchedDish) {
          foundItems.push(word);
          caloriesInfo[word] = matchedDish["calories"];
          if (!firstImageUrl) {
            firstImageUrl = matchedDish["image_url"]; // Store the first available image
          }
        }
      }

      setValidItems(foundItems); // Only store valid items
      setCaloriesData(caloriesInfo);
      setImgUrl(firstImageUrl); // Store only one image
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // ✅ Handles checkbox selection
  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) => {
      const newSelection = { ...prev };
      if (newSelection[item]) {
        delete newSelection[item]; // Remove if unchecked
      } else {
        newSelection[item] = 1; // Default quantity to 1
      }
      return newSelection;
    });
  };

  // ✅ Handles quantity change
  const handleQuantityChange = (item, quantity) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: quantity,
    }));
  };

  // ✅ Calculate total calories dynamically
  const totalCalories = Object.entries(selectedItems).reduce(
    (total, [item, quantity]) => total + (caloriesData[item] || 0) * quantity,
    0
  );

  return (
    <div className="scanner-container">
      <h2>Scan to Discover! 🔍 Know what’s on your plate!</h2>
      <div id="qr-reader" className="qr-box"></div>

      <div className="button-container">
        {!scanning ? (
          <button onClick={startScanning} className="scan-btn">Start Scan</button>
        ) : (
          <button onClick={stopScanning} className="stop-btn">Stop Scan</button>
        )}
      </div>

      {result && <p className="scan-result">Scanned Dish: {result}</p>}

      {/* ✅ Display items as checkboxes with quantity dropdowns */}
      {validItems.length > 0 && (
        <div>
          <h3>Select Items</h3>
          {validItems.map((item) => (
            <div key={item} className="item-selection">
              <input
                type="checkbox"
                id={item}
                checked={selectedItems[item] !== undefined}
                onChange={() => handleCheckboxChange(item)}
              />
              <label htmlFor={item}>{item}</label>

              {/* Dropdown for quantity */}
              {selectedItems[item] !== undefined && (
                <select
                  value={selectedItems[item]}
                  onChange={(e) => handleQuantityChange(item, Number(e.target.value))}
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ✅ Display ONLY ONE image */}
      {imgUrl && <img src={imgUrl} alt="Dish" width="200" />}

      <h3>Total Calories: {totalCalories}</h3>
    </div>
  );
};

export default CustomQRScanner;
