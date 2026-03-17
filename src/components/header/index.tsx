import { useState } from "react";

import Logo from "@assets/logo.svg";
import HamburguerIcon from "@components/icons/hamburguer";
import CloseIcon from "@components/icons/close";
import Nav from "@components/nav";
import Button from "@components/button";
import styles from "./styles.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.root} id="header">
        <div className="container">
          <Button
            className={styles.mobileButtonToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburguerIcon />}
          </Button>
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
