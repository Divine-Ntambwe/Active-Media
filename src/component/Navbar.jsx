import React from 'react'
import styles from './Navbar.module.css'
import logo from '../assets/ActiveMediaLogo.png'

function Navbar() {
  return (
    <div className={styles.navBar}>
      <img src={logo} alt="Active Media Logo" className={styles.logo} />
      <ol className={styles.navList}>
        <li className={styles.navItem}>Software & Development</li>
        <li className={styles.navItem}>Design & Marketing</li>
        <li className={styles.navItem}>About Us</li>
        <li className={styles.navItem}>Contact Us</li>
      </ol>
    </div>
  )
}

export default Navbar
