import styles from "./styles.module.css";
import Logo from "@assets/logo.svg";
import Nav from "@components/nav";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    title: "Link to Little Lemon's Facebook page",
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    title: "Link to Little Lemon's Twitter page",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    title: "Link to Little Lemon's Instagram page",
  },
];

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
            <p>
              <a
                href="tel:+1234567890"
                title="Link to Little Lemon's phone number"
              >
                +1 (123) 456-7890
              </a>
            </p>
            <p>
              <a href="mailto:someemail@littlelemon.com">
                someemail@littlelemon.com
              </a>
            </p>
          </div>
        </div>
        <div className={styles.footerContentWrapper}>
          <h4>Social Media</h4>
          <div className={styles.footerContentBox}>
            {socialMedia.map((social) => (
              <p key={social.name}>
                <a href={social.url} title={social.title} target="_blank">
                  {social.name}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
