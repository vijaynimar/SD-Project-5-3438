import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './dishes.css';

const dishes = [
  {
    dish_name: 'Idli Vada Combo',
    category: 'South Indian',
    main_dish: 'Idli',
    side_dish: 'Vada',
    cuisine: 'Indian',
    calories: 350,
    description: 'A classic South Indian breakfast combo served with sambar and chutney.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Idli_Sambar.JPG/330px-Idli_Sambar.JPG',
  },
  {
    dish_name: 'Chole Bhature',
    category: 'North Indian',
    main_dish: 'Bhature',
    side_dish: 'Chole',
    cuisine: 'Indian',
    calories: 600,
    description: 'A popular North Indian dish with spicy chickpeas and deep-fried bread.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/450px-Chole_Bhature_At_Local_Street.jpg',
  },
  {
    dish_name: 'Dosa & Upma',
    category: 'South Indian',
    main_dish: 'Dosa',
    side_dish: 'Upma',
    cuisine: 'Indian',
    calories: 400,
    description: 'A crispy dosa served with a side of soft and flavorful upma.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Pesarattu.jpg/120px-Pesarattu.jpg',
  },
  {
    dish_name: 'Pav Bhaji',
    category: 'Street Food',
    main_dish: 'Pav',
    side_dish: 'Bhaji',
    cuisine: 'Indian',
    calories: 450,
    description: 'A spicy mashed vegetable curry served with buttered pav.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bambayya_Pav_bhaji.jpg/330px-Bambayya_Pav_bhaji.jpg',
  },
  {
    dish_name: 'Vada Pav',
    category: 'Street Food',
    main_dish: 'Vada',
    side_dish: 'Pav',
    cuisine: 'Indian',
    calories: 350,
    description: 'A spicy mashed potato fritter encased in a soft bread roll, served with chutneys and fried green chilies.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vada_Pav-Indian_street_food.JPG/375px-Vada_Pav-Indian_street_food.JPG',
  },
  {
    dish_name: 'Samosa',
    category: 'Snack',
    main_dish: 'Pastry',
    side_dish: 'Spiced Potato Filling',
    cuisine: 'Indian',
    calories: 200,
    description: 'A deep-fried pastry filled with spiced potatoes and peas, offering a delightful crunch and flavor.',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Samosa-and-Chatni.jpg/420px-Samosa-and-Chatni.jpg',
  },
];

function Dishes() {
  const [qrData, setQrData] = useState(null);

  const handleGenerateQr = (dishName) => {
    setQrData(dishName);
  };

  return (
    <section className="dishes-section">
      <h2>Our Dishes</h2>
      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.dish_name} className="dish-card">
            <img src={dish.image_url} alt={dish.dish_name} />
            <h3>{dish.dish_name}</h3>
            <p>{dish.description}</p>
            <button onClick={() => handleGenerateQr(dish.dish_name)}>Generate QR</button>
            {qrData === dish.dish_name && (
              <QRCodeCanvas value={dish.dish_name} size={200} level="H" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dishes;
