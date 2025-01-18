import React, { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const CustomQRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState("");
  const [responseMessage, setResponseMessage] = useState(""); // To hold the backend response
  const [imgUrl, setImgUrl] = useState(""); // To store image URL
  const [calories,setCalories]=useState("");
  const qrCodeRef = useRef(null);

  const startScanning = () => {
    setResponseMessage(""); // Clear the response message
    setImgUrl(""); // Clear the image URL
    setResult(""); //
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
          setResult(decodedText); // Set the decoded text
          stopScanning(); // Stop scanning after successful scan
          sendRequest(decodedText); // Send the decoded text to the backend
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

  // Function to send the decoded QR text to the backend
  const sendRequest = async (decodedText) => {
    try {
      const response = await fetch("http://localhost:5000/api/send-text", {
        method: "POST", // POST request to send data to backend
        headers: {
          "Content-Type": "application/json", // Send data as JSON
        },
        body: JSON.stringify({ text: decodedText }), // Send the decoded text as JSON
      });

      const data = await response.json(); // Parse the response from backend
      console.log("Response from backend:", data); // Log the response from backend

      // Update the state with the backend response
      setResponseMessage(`Dish: ${data.dishname}, Calories: ${data.calories}`);
      setImgUrl(data.img_url); // Set the image URL from the response
      setCalories(data.calories);
    } catch (error) {
      console.error("Error sending request:", error); // Log errors if any
    }
  };

  return (
    <div className="scanner-container">
      <h2>Custom QR Scanner</h2>
      <div id="qr-reader" className="qr-box"></div>

      <div className="button-container">
        {!scanning ? (
          <button onClick={startScanning} className="scan-btn">Start Scan</button>
        ) : (
          <button onClick={stopScanning} className="stop-btn">Stop Scan</button>
        )}
      </div>

      {result && <p className="scan-result">Dish_Name: {result}</p>}

      
      
      {/* Display the image if available */}
      {imgUrl && <img src={imgUrl} alt="Dish" />}
      {calories && <p>Total_Calories:{calories}</p>}
      
    </div>
  );
};

export default CustomQRScanner;
