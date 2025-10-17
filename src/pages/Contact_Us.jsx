import React, { useRef } from "react";
import styles from "./Contact_Us.module.css";
import emailjs from "@emailjs/browser";
import Navbar from "../component/Navbar";

const Contact_Us = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qkzjp5l",        // ✅ Your EmailJS Service ID
        "template_3h7awxq",       // ✅ Your EmailJS Template ID
        form.current,
        "gBcw28gK6_wka5fry"       // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          alert("Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.log("Failed...", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>

      {/* Page Title */}
      <h1 className={styles.heading}>CONTACT US</h1>

      {/* Contact Card */}
      <div className={styles.contactCard}>
        <h1 className={styles.subHeadingContact2}>How Can We Be Of Assistance?</h1>
        <p className={styles.subHeadingAbout}>Tell Us About You</p>
        <hr className={styles.divider} />
        <p className={styles.subHeadingContact}>How Can We Contact You?</p>

        {/* ✅ Hooked form into EmailJS */}
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Name :</label>
          <input type="text" name="user_name" required />

          <label>Email :</label>
          <input type="email" name="user_email" required />

          <label>Contact Number :</label>
          <input type="text" name="contact_number" required />

          <label>Message :</label>
          <textarea
            name="message"
            rows="5"
            required
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`; 
            }}
          />



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
