import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import GreekSaladImg from "@assets/greek-salad.png";
import BruschetaImg from "@assets/burscheta.png";
import LemonDessertImg from "@assets/lemon-dessert.png";
import SectionHeader from "@components/section-header";
import Button from "@components/button";
import styles from "./styles.module.css";

const specials = [
  {
    id: "greek-salad",
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: GreekSaladImg,
  },
  {
    id: "burscheta",
    title: "Burscheta",
    price: "$10.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: BruschetaImg,
  },
  {
    id: "lemon-dessert",
    title: "Lemon Dessert",
    price: "$11.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: LemonDessertImg,
  },
];

const SpecialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.root} id="specials">
      <div className="container">
        <SectionHeader
          className={styles.specialHeader}
          title="This week specials"
          right={
            <Button onClick={() => navigate("/order-online")}>
              Online Menu
            </Button>
          }
        />
        <div className={classNames(styles.specialCards, "grid")}>
          {specials.map((special) => (
            <article className={styles.specialCard} key={special.id}>
              <div className={styles.specialWrapImg}>
                <img src={special.image} alt={special.title} />
              </div>
              <div className={styles.specialCardContent}>
                <div className={styles.specialCardHeader}>
                  <h3 className={styles.specialCardTitle}>{special.title}</h3>
                  <p className={styles.specialCardPrice}>{special.price}</p>
                </div>
                <p className={styles.specialCardDescription}>
                  {special.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
