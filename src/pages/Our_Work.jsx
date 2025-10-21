import React, { useState, useEffect, useRef } from "react";
import styles from "./Rhaddock.module.css";

// Import the 3D RH logo
import RhLogo from "../assets/Frame 203.png";
import Group72 from "../assets/Group 72.png";
import Blending from "../assets/blending 1755804129410.png";

// Supreme Build Up assets
import SupremeBanner from "../assets/image copy.png";
import SupremeLogo from "../assets/SupremeLogo.png";

// Rapidtrade assets
import deliveryImg from "../assets/rapidtrade1.png";
import rapidtradeLogo from "../assets/rapidtrade2.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

const Recent_Work = () => {
  const nav = useNavigate()
  const Link =["https://www.supremebuildit.co.za/","https://rapidtrade.com/","https://www.rhaddock.co.za/"]
  const headings = ["SUPREME BUILD IT", "RAPIDTRADE", "R HADDOCK"];
  const banner = [SupremeBanner, deliveryImg, Group72];
  const logo = [SupremeLogo, rapidtradeLogo, RhLogo];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // true = visible, false = faded out
  const recentWork = useRef();
  
useEffect(() => {
    const handleScroll = (e) => {
      // const step = window.scrollY + 1 // every 200px scroll → new index
      // if (step !== currentIndex && step < headings.length) {
        // fade out first
        setFade(false);
        const diff = e.deltaY
        // after fade out, switch text and fade back in
        setTimeout(() => {
          if (diff > 20 && currentIndex < headings.length-1){
            setCurrentIndex(currentIndex +1);
            
          } else if (diff < 1 && currentIndex > 0 && diff < -20){
            setCurrentIndex(currentIndex -1);
            
          } 

          if (diff > 20 && currentIndex === headings.length-1){
          
            recentWork.current.classList.add(styles.disappear);
            setTimeout(()=>{

              nav("/contact-us")
            },1000)

          }
          setFade(true);
        }, 300); // duration matches CSS fade
      // }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex, headings.length]);

  return (
    <>
    <Navbar/>
    <h1
            className={styles.recentWork}
            // ref={rwHeading}
            >
              Recent Work
            </h1>
      <div className={styles.container}
     
      >
        <div className={styles.supreme}></div>

        <div className={styles.rapidtrade}
         ref={recentWork}
        >
          <div className={styles.leftSection}>
            <h1
              className={`${styles.title} ${
                fade ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {headings[currentIndex]}
            </h1>
            <p className={styles.description}>
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus.
            </p>

            <div className={styles.rapidTradeViewSite}>
<a href={Link[currentIndex]} target="_blank" rel="noopener noreferrer">

              <svg
                width="100"
                height="66"
                viewBox="0 0 166 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.2282 38.7512C54.6263 39.2768 56.199 38.5716 56.5902 37.1302C57.8265 32.574 57.9187 27.7676 56.8385 23.1431C55.5526 17.6379 52.6631 12.6377 48.5354 8.7747C44.4077 4.91173 39.2272 2.35951 33.649 1.44079C28.0708 0.52207 22.3455 1.27811 17.197 3.6133C12.0485 5.94849 7.70803 9.75795 4.72455 14.56C1.74108 19.362 0.24857 24.9408 0.435754 30.5911C0.622937 36.2413 2.48141 41.7092 5.77615 46.3032C8.54386 50.1623 12.2207 53.2592 16.463 55.3305C17.8052 55.9858 19.3718 55.267 19.8973 53.869C20.4229 52.4709 19.706 50.9253 18.3787 50.2405C15.1321 48.5656 12.3153 46.1404 10.1714 43.151C7.50008 39.4263 5.99328 34.9931 5.84152 30.412C5.68975 25.8309 6.89984 21.3077 9.31878 17.4143C11.7377 13.521 15.2568 10.4324 19.4311 8.53904C23.6054 6.64572 28.2474 6.03274 32.7701 6.77762C37.2927 7.5225 41.493 9.59178 44.8396 12.7238C48.1862 15.8558 50.529 19.9099 51.5715 24.3733C52.4083 27.9556 52.3774 31.6724 51.4988 35.2184C51.1396 36.6681 51.8302 38.2257 53.2282 38.7512Z"
                  fill="black"
                />
                <path
                  d="M20.9729 55.4192C20.4731 56.2238 20.7201 57.2812 21.5247 57.781C22.3293 58.2808 23.3867 58.0338 23.8865 57.2292L22.4297 56.3242L20.9729 55.4192ZM40.6735 29.2543C40.458 28.332 39.5356 27.759 38.6132 27.9745L23.5828 31.4863C22.6604 31.7018 22.0874 32.6242 22.3029 33.5465C22.5184 34.4689 23.4408 35.0419 24.3632 34.8264L37.7236 31.7048L40.8452 45.0652C41.0607 45.9875 41.9831 46.5605 42.9054 46.345C43.8278 46.1295 44.4008 45.2071 44.1853 44.2848L40.6735 29.2543ZM22.4297 56.3242L23.8865 57.2292L40.4602 30.5495L39.0034 29.6445L37.5466 28.7395L20.9729 55.4192L22.4297 56.3242Z"
                  fill="black"
                />
                <path
                  d="M55.4785 42.0304L60.3807 56.3759H60.5785L65.4808 42.0304H68.3533L62.0148 59.644H58.9444L52.6059 42.0304H55.4785ZM70.6905 59.644V46.4338H73.262V59.644H70.6905ZM71.9891 44.3955C71.5419 44.3955 71.1577 44.2464 70.8367 43.9483C70.5213 43.6444 70.3636 43.2832 70.3636 42.8646C70.3636 42.4403 70.5213 42.0791 70.8367 41.781C71.1577 41.4771 71.5419 41.3252 71.9891 41.3252C72.4363 41.3252 72.8176 41.4771 73.133 41.781C73.4541 42.0791 73.6146 42.4403 73.6146 42.8646C73.6146 43.2832 73.4541 43.6444 73.133 43.9483C72.8176 44.2464 72.4363 44.3955 71.9891 44.3955ZM82.415 59.9107C81.1134 59.9107 79.9925 59.6326 79.0522 59.0764C78.1176 58.5145 77.3952 57.7262 76.8849 56.7113C76.3803 55.6907 76.1281 54.4953 76.1281 53.1249C76.1281 51.7718 76.3803 50.5792 76.8849 49.5472C77.3952 48.5151 78.1062 47.7095 79.0178 47.1304C79.9352 46.5513 81.0074 46.2618 82.2344 46.2618C82.9797 46.2618 83.7022 46.3851 84.4017 46.6316C85.1012 46.8782 85.729 47.2652 86.2852 47.7927C86.8413 48.3202 87.2799 49.0053 87.601 49.8482C87.9221 50.6853 88.0826 51.703 88.0826 52.9013V53.813H77.5815V51.8865H85.5627C85.5627 51.2099 85.4251 50.6107 85.1499 50.089C84.8747 49.5615 84.4877 49.1458 83.9888 48.8419C83.4958 48.538 82.9167 48.3861 82.2516 48.3861C81.5291 48.3861 80.8984 48.5638 80.3595 48.9193C79.8262 49.2691 79.4134 49.7278 79.121 50.2954C78.8343 50.8573 78.691 51.4679 78.691 52.1273V53.6324C78.691 54.5153 78.8458 55.2664 79.1554 55.8857C79.4708 56.5049 79.9094 56.9779 80.4713 57.3047C81.0332 57.6258 81.6897 57.7864 82.4408 57.7864C82.9281 57.7864 83.3725 57.7176 83.7738 57.5799C84.1752 57.4366 84.5221 57.2245 84.8145 56.9435C85.1069 56.6626 85.3305 56.3157 85.4853 55.9029L87.9192 56.3415C87.7243 57.0582 87.3745 57.686 86.87 58.225C86.3712 58.7582 85.7433 59.1739 84.9865 59.472C84.2354 59.7644 83.3782 59.9107 82.415 59.9107ZM93.7761 59.644L89.8887 46.4338H92.5463L95.135 56.1351H95.264L97.8613 46.4338H100.519L103.099 56.0921H103.228L105.799 46.4338H108.457L104.578 59.644H101.955L99.2718 50.1062H99.074L96.3906 59.644H93.7761ZM127.12 46.6574C127.028 45.8432 126.65 45.2125 125.985 44.7653C125.32 44.3124 124.482 44.0859 123.473 44.0859C122.751 44.0859 122.126 44.2006 121.598 44.4299C121.071 44.6535 120.661 44.9631 120.369 45.3588C120.082 45.7486 119.939 46.193 119.939 46.6918C119.939 47.1104 120.036 47.4716 120.231 47.7755C120.432 48.0794 120.693 48.3345 121.014 48.5409C121.34 48.7416 121.69 48.9107 122.063 49.0483C122.436 49.1802 122.794 49.2891 123.138 49.3751L124.858 49.8224C125.42 49.96 125.996 50.1463 126.587 50.3814C127.177 50.6165 127.725 50.9261 128.229 51.3102C128.734 51.6944 129.141 52.1703 129.451 52.7379C129.766 53.3055 129.924 53.985 129.924 54.7762C129.924 55.7739 129.666 56.6597 129.15 57.4337C128.639 58.2078 127.897 58.8184 126.922 59.2656C125.953 59.7128 124.781 59.9365 123.405 59.9365C122.086 59.9365 120.945 59.7272 119.982 59.3086C119.018 58.8901 118.264 58.2966 117.72 57.5283C117.175 56.7543 116.874 55.8369 116.817 54.7762H119.483C119.534 55.4126 119.741 55.943 120.102 56.3673C120.469 56.7858 120.936 57.0983 121.504 57.3047C122.077 57.5054 122.705 57.6057 123.387 57.6057C124.138 57.6057 124.806 57.4882 125.391 57.2531C125.982 57.0123 126.446 56.6798 126.785 56.2555C127.123 55.8255 127.292 55.3238 127.292 54.7504C127.292 54.2286 127.143 53.8015 126.845 53.4689C126.552 53.1364 126.154 52.8612 125.649 52.6433C125.15 52.4254 124.586 52.2334 123.955 52.0671L121.874 51.4995C120.463 51.1153 119.345 50.5505 118.52 49.8052C117.7 49.0598 117.29 48.0736 117.29 46.8466C117.29 45.8318 117.565 44.9459 118.115 44.1891C118.666 43.4323 119.411 42.8446 120.351 42.426C121.292 42.0017 122.352 41.7896 123.534 41.7896C124.726 41.7896 125.778 41.9989 126.69 42.4174C127.607 42.836 128.33 43.4122 128.857 44.1461C129.385 44.8743 129.66 45.7114 129.683 46.6574H127.12ZM132.893 59.644V46.4338H135.464V59.644H132.893ZM134.192 44.3955C133.744 44.3955 133.36 44.2464 133.039 43.9483C132.724 43.6444 132.566 43.2832 132.566 42.8646C132.566 42.4403 132.724 42.0791 133.039 41.781C133.36 41.4771 133.744 41.3252 134.192 41.3252C134.639 41.3252 135.02 41.4771 135.335 41.781C135.657 42.0791 135.817 42.4403 135.817 42.8646C135.817 43.2832 135.657 43.6444 135.335 43.9483C135.02 44.2464 134.639 44.3955 134.192 44.3955ZM145.09 46.4338V48.4979H137.875V46.4338H145.09ZM139.81 43.2689H142.381V55.7653C142.381 56.2641 142.456 56.6396 142.605 56.8919C142.754 57.1385 142.946 57.3076 143.181 57.3993C143.422 57.4853 143.683 57.5283 143.964 57.5283C144.17 57.5283 144.351 57.514 144.506 57.4853C144.66 57.4567 144.781 57.4337 144.867 57.4165L145.331 59.5408C145.182 59.5982 144.97 59.6555 144.695 59.7128C144.42 59.7759 144.076 59.8103 143.663 59.8161C142.986 59.8275 142.356 59.7071 141.771 59.4548C141.186 59.2026 140.713 58.8127 140.352 58.2852C139.99 57.7577 139.81 57.0955 139.81 56.2985V43.2689ZM153.487 59.9107C152.185 59.9107 151.064 59.6326 150.124 59.0764C149.189 58.5145 148.467 57.7262 147.957 56.7113C147.452 55.6907 147.2 54.4953 147.2 53.1249C147.2 51.7718 147.452 50.5792 147.957 49.5472C148.467 48.5151 149.178 47.7095 150.089 47.1304C151.007 46.5513 152.079 46.2618 153.306 46.2618C154.051 46.2618 154.774 46.3851 155.473 46.6316C156.173 46.8782 156.801 47.2652 157.357 47.7927C157.913 48.3202 158.352 49.0053 158.673 49.8482C158.994 50.6853 159.154 51.703 159.154 52.9013V53.813H148.653V51.8865H156.634C156.634 51.2099 156.497 50.6107 156.222 50.089C155.946 49.5615 155.559 49.1458 155.061 48.8419C154.567 48.538 153.988 48.3861 153.323 48.3861C152.601 48.3861 151.97 48.5638 151.431 48.9193C150.898 49.2691 150.485 49.7278 150.193 50.2954C149.906 50.8573 149.763 51.4679 149.763 52.1273V53.6324C149.763 54.5153 149.917 55.2664 150.227 55.8857C150.542 56.5049 150.981 56.9779 151.543 57.3047C152.105 57.6258 152.761 57.7864 153.512 57.7864C154 57.7864 154.444 57.7176 154.846 57.5799C155.247 57.4366 155.594 57.2245 155.886 56.9435C156.179 56.6626 156.402 56.3157 156.557 55.9029L158.991 56.3415C158.796 57.0582 158.446 57.686 157.942 58.225C157.443 58.7582 156.815 59.1739 156.058 59.472C155.307 59.7644 154.45 59.9107 153.487 59.9107Z"
                  fill="black"
                />
              </svg>
 </a>

            </div>

            <div className={styles.deliverySection}>
              <img
                src={banner[currentIndex]}
                alt="Delivery"
                className={`${styles.deliveryImg} ${
                  fade ? styles.fadeImgIn : styles.fadeImgOut
                }`}
              />
            </div>
          </div>
          <div className={styles.deliverySection}>
            <img
              src={logo[currentIndex]}
              alt="RapidTrade Logo"
              className={`${styles.logoImg} ${
                fade ? styles.fadeRightIn : styles.fadeRightOut
              }`}
            />
          </div>
            {/* <img src={Blending} className={styles.bgImage} alt="" /> */}
        </div>

        {/* <div className={styles.rhaddock}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h1 className={styles.heading}>R HADDOCK</h1>
            <p className={styles.paragraph1}>
              Yorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Etiam eu turpis molestie, dictum est <br /> a, mattis tellus. Sed
              dignissim, metus nec fringilla <br /> accumsan, risus sem
              sollicitudin lacus, ut interdum <br /> tellus elit sed risus.
              Maecenas eget condimentum <br /> velit, sit amet feugiat lectus.
            </p>
            <div className={styles.blendingSection}>
              <img
                src={Blending}
                alt="blending effect"
                className={styles.blendingImage}
              />
            </div>
            <div className={styles.viewSite}>
              <img
                src="https://via.placeholder.com/30x30"
                alt="arrow-icon"
                className={styles.arrow}
              />
              <span className={styles.viewText}>View Site</span>
            </div>
            <div className={styles.websitePreview}>
              <img src={Group72} alt="website-preview" />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.logoCard}>
              <img src={RhLogo} alt="3D RH logo" className={styles.logo} />
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Recent_Work;
