import React from 'react'
import "./Navbar.module.css"
// import "../assets"

function Navbar() {
  return (
    <>
    <div className='styles.navBar'>
      <ol className='styles.navList'>
        <li>Logo</li>
        <li>Software & Development</li>
        <li>Design & Marketing</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ol>
    </div>
    </>
  )
}

export default Navbar
