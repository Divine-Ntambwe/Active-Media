import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/ActiveMediaLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navBar}>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Active Media Logo" className={styles.logo} />
      </Link>

      {/* Normal desktop nav list */}
      <ol className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/software" className={styles.navLink}>Software & Development</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/design-marketing" className={styles.navLink}>Design & Marketing</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about-us" className={styles.navLink}>About Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact-us" className={styles.navLink}>Contact Us</Link>
        </li>
      </ol>

      {/* Burger button (only shows on mobile) */}
      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Dark overlay behind sidebar */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}

      {/* Sidebar (mobile menu) */}
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <ol className={styles.mobileNavList}>
          <li className={styles.navItem}>
            <Link to="/software" className={styles.navLink} onClick={() => setIsOpen(false)}>Software & Development</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/design-marketing" className={styles.navLink} onClick={() => setIsOpen(false)}>Design & Marketing</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about-us" className={styles.navLink} onClick={() => setIsOpen(false)}>About Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact-us" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
