import React, { useEffect, useRef, useState } from 'react'
import styles from './Digital_Marketing.module.css'
import Navbar from '../component/Navbar';
const Digital_Marketing = () => {
    const [lastY, setLastY] = useState(0);
    const [index,setIndex] = useState(0)
    const BGImg = useRef();
    const heading = useRef();
    const par = useRef();
    const container = useRef();
    const wrapper = useRef()
    const lastFour = useRef()
    const firstTwo = useRef()
    let num = 0
    function onScroll(){
      console.log(document.documentElement.scrollTop)

    const y = window.scrollY;
      if (document.documentElement.scrollTop > 0) {
        BGImg.current.style.top = "100px"
        
        heading.current.classList.add(styles.moveUp)
        // heading.current.style.animationFillMode = "forwards"

        par.current.classList.add(styles.disappear)
        // par.current.style.animationFillMode = "forwards"

        wrapper.current.classList.add(styles.moveUp)
        container.current.style.height = "105vh"
        // wrapper.current.style.animationFillMode = "forwards"
        
      }

      if (document.documentElement.scrollTop > 140){
         BGImg.current.style.left = "800px";
         BGImg.current.style.top = "100px"


         lastFour.current.classList.add(styles.moveUp2)
        //  lastFour.current.style.animationFillMode = "forwards"

         firstTwo.current.classList.add(styles.disappear)
        //  firstTwo.current.style.animationFillMode = "forwards"
    
      }

      if (document.documentElement.scrollTop > 236){
        // alert("oooooo")
      }
      if (document.documentElement.scrollTop == 0){
       firstTwo.current.classList.remove(styles.disappear)
       lastFour.current.classList.remove(styles.moveUp2)
       wrapper.current.classList.remove(styles.moveUp)
       heading.current.classList.remove(styles.moveUp)
       par.current.classList.remove(styles.disappear)

       BGImg.current.style.left = "-55px"
       BGImg.current.style.top = "-200px"
    }
  }
    
    useEffect(() => {
    window.addEventListener("wheel", onScroll);
    return () => window.removeEventListener("wheel", onScroll);
  }, []);
  
    return (
      <>
      <Navbar/>
    <div ref={container} className={styles.container}>
        <img ref={BGImg} className={styles.digitalBackground} src="./backgroundLines.png"/>
      <h1 ref={heading} >
        GRAPHIC DESIGN &<br />
        DIGITAL MARKETING
      </h1>

      <div ref={par} className={styles.paragraphs}>
        <p>
          We help businesses express the benefits of their products and services
          in an attractive, compact and concise way through colorful brochures,
          descriptive flyers, eye-catching advertisements etc.
        </p>

        <p>
          We have the experience and tools to help you build your brand or
          business. Having an eye-catching custom logo, business cards,
          letterheads and any branding can increase both online and offline
          presence of your business substantially. Work with creative
          individuals to build your brand through custom, memorable design.
        </p>
      </div>  

    <div ref={wrapper} className={styles.wrapper}>
      {/* Card 1 */}
      <div ref={firstTwo} className={styles.firstTwo}>

      <div className={styles.cardOne}>
        <img src="src\assets\Group 30.png"/>
      </div>

      {/* Card 2 */}
      <div className={styles.cardTwo}>
           <img src="src\assets\Group 36.png"/>
      </div>
      </div>

      <div ref={lastFour} className={styles.lastFour}>

      <div className={styles.cardThree}>
        <img src="src\assets\Group 43.png"/>
      </div>

      <div className={styles.cardFour}>
           <img src="src\assets\Group 42.png"/>
      </div>

      {/* Card 4 */}
      <div className={styles.cardFive}>
           <img src="src\assets\Group 39.png"/>
      </div>

         {/* Card 5 */}
      <div className={styles.cardSix}>
        <img src="src\assets\Group 40.png"/>
      </div>
      </div>

       {/* Card 6 */}
    </div>

     {/* Card 3 */}
      
    </div>
    </>
  );
};

export default Digital_Marketing;
