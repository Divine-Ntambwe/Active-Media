import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./About_Us.module.css";

const positions = [
  { x: "0%", y: "0%" }, // center
  { x: "40%", y: "-40%" }, // top right
  { x: "40%", y: "40%" }, // bottom right
  { x: "-40%", y: "40%" }, // bottom left
  { x: "-40%", y: "-40%" } // top left
];
import styles from './About_Us.module.css'
import lightImg from '../assets/Frame 206.png'; 
import "@fontsource/inter/300.css"

function About_Us() {
  const [posIndex, setPosIndex] = useState(0);
  const [laptopVisible, setLaptopVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;

      // Background cycles every 400px
      const newIndex = Math.floor(scrollValue / 400) % positions.length;
      setPosIndex(newIndex);

      // Laptop logic
      if (scrollValue > 200 && scrollValue < 600) {
        setLaptopVisible(true);
      } else if (scrollValue >= 600) {
        setLaptopVisible(false);
      } else {
        setLaptopVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.aboutSection}>
      {/* Background purple lines */}
      <motion.img
        src="/backgroundLines.png"
        alt="Background lines"
        className={styles.lines}
        animate={{ x: positions[posIndex].x, y: positions[posIndex].y }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Laptop with bubbles */}
      <motion.div
        className={styles.laptopWrapper}
        animate={laptopVisible ? { x: "-1%", opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <img src="/laptop.png" alt="Laptop with bubbles" />
      </motion.div>

      {/* Text content */}
      <div className={styles.textContent}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WHO ARE WE?
        </motion.h1>

        <motion.p
          className={styles.paragraph1}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We are a software development and <br /> media agency that focuses on <br /> business growth.
        </motion.p>

        <motion.p
          className={styles.paragraph2}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Active Media consists <br /> of a team of people <br />that are passionate <br /> about what they do <br /> and strive to ensure <br />
           that only the very best <br /> service is offered to <br />our clients.We stand <br />by our company ethics <br />-ensuring honesty, <br /> authenticity and <br />
           excellence. You have <br />ideas. We have <br /> software solutions.
        </motion.p>

        <motion.p
          className={styles.paragraph3}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          Active Media is a <br /> premier multimedia <br /> solution company <br /> with innovative and <br /> distinctive solutions <br /> that go beyond the <br />traditional means of <br /> marketing. Great <br /> business needs <br />great software.
        </motion.p>
      </div>
    </section>
  );
}

//     <div>
//       {/* Carmel Framework (the start) */}
//       <div className={styles.conatiner}>
//         <div className={styles.text}>
//         <h5>Team</h5>
//         <p className={styles.teamText}>
//         Active Media consists of a team of<br></br>
//         people that are passionate about what<br></br>   
//         they do and strive to ensure that only only the<br></br>
//         very best service is offered to our <br></br>
//         clients. We stand by our company ethics<br></br>
//         -ensuring honesty, authenticity and <br></br>
//         excellence. You have ideas. We have <br></br>
//         software solutions</p>
//           <p className={styles.passionate}>Passionate</p>
//         </div>
//           <div className={styles.lightimage}>
//             <img src={lightImg} alt="LightBulb" />

//         </div>

//       </div>
//         <div className={styles.conatiner2}>
//           <div className={styles.text2}>
//             <img src="/src/assets/Frame 201.png" alt="PhoneImage" className={styles.image1} />

//           </div>
//             <div className={styles.phoneimage}>
//               <h1 className={styles.title}>Solutions</h1>
//                 <p className={styles.paragraph}>
//                 We aim to provide each individual service to a whole host of industries.
//                 Our expertise allow us to fully customise each</p>
//                 <p className={styles.paragraph2}>product work for every individual business model
//                  - providing a strong foundation with which any business can begin</p>
//                 <p className={styles.paragraph3}>to maximise on their potential.</p>
//               <button className={styles.experties}>Experties</button>
//         </div>
//         </div>
//       {/* Ozias Framework (The End) */}
//     </div>
//   )
// }

export default About_Us
