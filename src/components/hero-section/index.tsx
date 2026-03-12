import "./styles.css";
import RestaurantFood from "@assets/restaurant-food.jpg";

const HeroSection = () => (
  <section id="hero">
    <div className="container">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-img-wrapper">
        <img src={RestaurantFood} alt="Chef holding a restaurant food" />
      </div>
    </div>
  </section>
);

export default HeroSection;
