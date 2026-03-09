import Logo from "../assets/logo.svg";
import Nav from "./Nav";

const Footer = () => (
  <footer>
    <div>
      <img src={Logo} alt="Little Lemon" />
    </div>
    <div>
      <div>
        <h4>Doormat navigation</h4>
        <Nav />
      </div>
      <div>
        <h4>Contact Info</h4>
        <p>Some fake address</p>
        <p>(123) 456-7890</p>
        <p>someemail@littlelemon.com</p>
      </div>
      <div>
        <h4>Social Media</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  </footer>
);

export default Footer;