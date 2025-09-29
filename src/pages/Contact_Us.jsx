import React from "react";
import styles from "./Contact_Us.module.css";
import Navbar from "../component/Navbar";

const Contact_Us = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Page Title */}
      <h1 className={styles.heading}>CONTACT US</h1>

      {/* Contact Card */}
      <div className={styles.contactCard}>
        <h1 className={styles.subHeadingContact2}>How Can We Be Of Assistance ?</h1>
        <p className={styles.subHeadingAbout}>Tell Us About You</p>
        <hr className={styles.divider}/>
        <p className={styles.subHeadingContact}>How Can We Contact You ?</p>

        <form className={styles.form}>
          <label>Name :</label>
          <input type="text" name="name" />

          <label>Email :</label>
          <input type="email" name="email" />

          <label>Contact Number :</label>
          <input type="text" name="contact" />

          <button type="submit">SUBMIT</button>
        </form>
      </div>

      {/* Footer Text */}
      <p className={styles.footerText}>
        Thank you for your interest in Active Media<br /> Industries. <br />
        Please let us know how we can help you by filling <br /> out the form.
      </p>
    </div>
  );
};

export default Contact_Us;
