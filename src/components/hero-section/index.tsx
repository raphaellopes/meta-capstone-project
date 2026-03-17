import { useNavigate } from "react-router-dom";

import Button from "@components/button";
import RestaurantFood from "@assets/restaurant-food.jpg";
import styles from "./styles.module.css";

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
          <Button onClick={() => navigate("/booking")}>Reserve a Table</Button>
        </div>
        <div className={styles.heroImgWrapper}>
          <img src={RestaurantFood} alt="Chef holding a restaurant food" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
