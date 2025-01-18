import './dishes.css'
const dishes = [
    {
        "dish_name": "Idli Vada Combo",
        "category": "South Indian",
        "main_dish": "Idli",
        "side_dish": "Vada",
        "cuisine": "Indian",
        "calories": 350,
        "description": "A classic South Indian breakfast combo served with sambar and chutney.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Idli_Sambar.JPG/330px-Idli_Sambar.JPG"
      },
      {
        "dish_name": "Chole Bhature",
        "category": "North Indian",
        "main_dish": "Bhature",
        "side_dish": "Chole",
        "cuisine": "Indian",
        "calories": 600,
        "description": "A popular North Indian dish with spicy chickpeas and deep-fried bread.",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/450px-Chole_Bhature_At_Local_Street.jpg"
      },
      {
        "dish_name": "Dosa & Upma",
        "category": "South Indian",
        "main_dish": "Dosa",
        "side_dish": "Upma",
        "cuisine": "Indian",
        "calories": 400,
        "description": "A crispy dosa served with a side of soft and flavorful upma.",
        "image_url": "https://example.com/dosa-upma.jpg"
      },
      {
        "dish_name": "Rajma Chawal",
        "category": "North Indian",
        "main_dish": "Rice",
        "side_dish": "Rajma",
        "cuisine": "Indian",
        "calories": 500,
        "description": "A wholesome meal of kidney beans cooked in rich tomato gravy served with rice.",
        "image_url": "https://example.com/rajma-chawal.jpg"
      },
      {
        "dish_name": "Pav Bhaji",
        "category": "Street Food",
        "main_dish": "Pav",
        "side_dish": "Bhaji",
        "cuisine": "Indian",
        "calories": 450,
        "description": "A spicy mashed vegetable curry served with buttered pav.",
        "image_url": "https://example.com/pav-bhaji.jpg"
      }
  ];


function Dishes(){
    return (
        <section className="dishes-section">
        <h2>Our Dishes</h2>
        <div className="dishes-grid">
            {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
                <img src={dish.image_url} alt={dish.dish_name} />
                <h3>{dish.dish_name}</h3>
                <p>{dish.disc}</p>
                <button></button>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Dishes;
