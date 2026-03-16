import "./styles.css";
import Logo from "@assets/logo.svg";
import HamburguerIcon from "@components/icons/hamburguer";
import Nav from "@components/nav";

const Header = () => (
  <header id="header">
    <div className="container">
      <button className="mobile-button-toggle">
        <HamburguerIcon />
      </button>
      <div className="header-content">
        <a href="/" className="logo-link">
          <img src={Logo} alt="Little Lemon" />
        </a>
        <Nav />
      </div>
    </div>
  </header>
);

export default Header;
