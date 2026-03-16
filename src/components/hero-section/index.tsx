import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import RestaurantFood from "@assets/restaurant-food.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.root} id="hero">
      <div className="container">
        <div className={styles.heroContent}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={() => navigate("/booking")}>Reserve a Table</button>
        </div>
        <div className={styles.heroImgWrapper}>
          <img src={RestaurantFood} alt="Chef holding a restaurant food" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
