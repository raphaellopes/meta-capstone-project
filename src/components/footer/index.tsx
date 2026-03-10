import './styles.css';
import Logo from "@assets/logo.svg";
import Nav from "@components/nav";

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div>
        <img src={Logo} alt="Little Lemon" />
      </div>
      <div className="footer-content">
        <div className="footer-content-wrapper">
          <h4>Doormat navigation</h4>
          <Nav />
        </div>
        <div className="footer-content-wrapper">
          <h4>Contact Info</h4>
          <div>
            <p>Some fake address</p>
            <p>(123) 456-7890</p>
            <p>someemail@littlelemon.com</p>
          </div>
        </div>
        <div className="footer-content-wrapper">
          <h4>Social Media</h4>
          <div>
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