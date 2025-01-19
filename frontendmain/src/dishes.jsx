import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './dishes.css';

const API_URL = 'https://sd-project-5-3438.onrender.com/allDish';

function Dishes() {
  const [dishes, setDishes] = useState([]);
  const [qrData, setQrData] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debugging
        if (data && Array.isArray(data.dishes)) {
          setDishes(data.dishes);
        } else {
          console.error("API response does not contain 'dishes' array:", data);
          setDishes([]); // Ensures it's always an array
        }
      })
      .catch((error) => console.error('Error fetching dishes:', error));
  }, []);

  const handleGenerateQr = (dishName) => {
    setQrData(dishName);
  };

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="dishes-section">
      <h2>Our Dishes</h2>
      <div className="dishes-grid">
        {dishes.length > 0 ? (
          dishes.slice(0, visibleCount).map((dish) => (
            <div key={dish._id} className="dish-card">
              <img src={dish.image_url} alt={dish.dish_name} />
              <h3>{dish.dish_name}</h3>
              <p>{dish.description}</p>
              <button onClick={() => handleGenerateQr(dish.dish_name)}>Generate QR</button>
              {qrData === dish.dish_name && (
                <QRCodeCanvas value={dish.dish_name} size={200} level="H" />
              )}
            </div>
          ))
        ) : (
          <p>Loading dishes or no data available...</p>
        )}
      </div>
      {visibleCount < dishes.length && (
        <button className="see-more" onClick={handleSeeMore}>See More</button>
      )}
    </section>
  );
}

export default Dishes;
