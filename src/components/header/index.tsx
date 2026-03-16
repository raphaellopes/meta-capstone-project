import { useState } from "react";

import styles from "./styles.module.css";
import Logo from "@assets/logo.svg";
import HamburguerIcon from "@components/icons/hamburguer";
import CloseIcon from "@components/icons/close";
import Nav from "@components/nav";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.root} id="header">
        <div className="container">
          <button
            className={styles.mobileButtonToggle}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburguerIcon />}
          </button>
          <div className={styles.headerContent}>
            <a href="/" className="logo-link">
              <img src={Logo} alt="Little Lemon" />
            </a>
            <Nav />
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <aside className={styles.mobileNavContainer} id="mobile-menu">
          <Nav />
        </aside>
      )}
    </>
  );
};

export default Header;
