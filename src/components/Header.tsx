import Nav from "./Nav";
import Logo from "../assets/logo.svg";

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