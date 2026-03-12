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
        <div>
          <img src={Logo} alt="Little Lemon" />
        </div>
        <Nav />
      </div>
    </div>
  </header>
);

export default Header;
