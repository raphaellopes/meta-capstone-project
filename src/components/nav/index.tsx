import classNames from "classnames";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;
  const isActive = (path: string) => currentPath === path;

  const navLinks = [
    { path: "/", label: "Home", title: "Link to home page" },
    { path: "/#about", label: "About", title: "Link to about page" },
    {
      path: "/booking",
      label: "Reservations",
      title: "Link to reservations page",
    },
    {
      path: "/order-online",
      label: "Order online",
      title: "Link to order online page",
    },
    { path: "/login", label: "Login", title: "Link to login page" },
  ];

  return (
    <nav className="nav">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li className="nav-item" key={link.path}>
            <a
              className={classNames("nav-link", {
                "nav-link-active": isActive(link.path),
              })}
              href={link.path}
              title={link.title}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
