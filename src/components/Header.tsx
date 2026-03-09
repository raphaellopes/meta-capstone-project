import Nav from "./Nav";
import Logo from "../assets/logo.svg";

const Header = () => (
  <header>
    <div>
      <img src={Logo} alt="Little Lemon" />
    </div>
    <Nav />
  </header>
);

export default Header;