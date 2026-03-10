import './styles.css';
import Logo from "@assets/logo.svg";
import Nav from "@components/nav";

const Header = () => (
  <header id="header">
    <div className="container">
      <div>
        <img src={Logo} alt="Little Lemon" />
      </div>
      <Nav />
    </div>
  </header>
);

export default Header;