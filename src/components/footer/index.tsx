import styles from "./styles.module.css";
import Logo from "@assets/logo.svg";
import Nav from "@components/nav";

const Footer = () => (
  <footer className={styles.root} id="footer">
    <div className="container">
      <a href="/" className="logo-link">
        <img src={Logo} alt="Little Lemon" />
      </a>
      <div className={styles.footerContent}>
        <div className={styles.footerContentWrapper}>
          <h4>Doormat navigation</h4>
          <Nav />
        </div>
        <div className={styles.footerContentWrapper}>
          <h4>Contact Info</h4>
          <div className={styles.footerContentBox}>
            <p>Some fake address</p>
            <p>(123) 456-7890</p>
            <p>someemail@littlelemon.com</p>
          </div>
        </div>
        <div className={styles.footerContentWrapper}>
          <h4>Social Media</h4>
          <div className={styles.footerContentBox}>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
