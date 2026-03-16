import styles from "./styles.module.css";
import About1Img from "@assets/about-restaurant-a.png";
import About2Img from "@assets/about-restaurant-b.png";
import SectionHeader from "../section-header";

const AboutSection = () => (
  <section className={styles.root} id="about">
    <div className="container">
      <div className={styles.aboutBox}>
        <SectionHeader
          title="Little Lemon"
          subtitle="Chicago"
          variant="primary-highlight"
          titleAs="h2"
          subtitleAs="h3"
        />
        <p className={styles.aboutDescription}>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. We are a family owned
          Mediterranean restaurant, focused on traditional recipes served with a
          modern twist. We are a family owned Mediterranean restaurant, focused
          on traditional recipes served with a modern twist.
        </p>
      </div>
      <div className={styles.aboutImgWrapper}>
        <img
          className={styles.aboutImgTop}
          src={About1Img}
          alt="Restaurant owner talking to the chef about food"
        />
        <img
          className={styles.aboutImgBottom}
          src={About2Img}
          alt="Restaurant owner smilling with the chef"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
