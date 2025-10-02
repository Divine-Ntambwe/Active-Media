import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/ActiveMediaLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.navBar}>
      <Link to="/">
        <img src={logo} alt="Active Media Logo" className={styles.logo} />
      </Link>
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
    </div>
  );
}

export default Navbar;
