import React, { useRef, useEffect, useState } from 'react';
import styles from "./Recent_Work.module.css";

// Import the 3D RH logo
import RhLogo from "../assets/Frame 203.png";
import Group72 from "../assets/Group 72.png";
import Blending from "../assets/blending 1755804129410.png";

import SupremeLogo from "../assets/SupremeLogo.png"
import SupremeBannerImage from "../assets/SupremeBanner.jpg" // Renamed the variable for clarity

const Recent_Work = () => {
  // Logic required to trigger ANY scroll animation
  const supremeRef = useRef(null);
  const [isSupremeVisible, setIsSupremeVisible] = useState(false);
  const [hasScrolledOut, setHasScrolledOut] = useState(false); // New state for exit animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Entering the viewport: Trigger fade-in
          setIsSupremeVisible(true);
          setHasScrolledOut(false);
          // Do NOT unobserve here, as we need to detect when it leaves.
        } else {
          // Leaving the viewport: Trigger fade-out ONLY if it was previously visible
          if (isSupremeVisible) {
            setHasScrolledOut(true);
          }
          setIsSupremeVisible(false);
        }
      },
      {
        // Use a small root margin to detect when the element is just leaving the screen
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px' // Helps detect exit sooner
      }
    );

    if (supremeRef.current) {
      observer.observe(supremeRef.current);
    }

    return () => {
      if (supremeRef.current) {
        observer.disconnect();
      }
    };
  }, [isSupremeVisible]); // isSupremeVisible is included to re-run effect for logic updates


  // Determine the class for the Supreme Content block
  const supremeContentClasses = `${styles.SupremeContent} ${isSupremeVisible ? styles.fadeInSlide : hasScrolledOut ? styles.fadeOutUp : ''
    }`;

  return (
    <>
      {/* Supreme */}
      <div className={styles.supreme} ref={supremeRef}>
        <div className={styles.wrapperSupreme}>
          {/* Left Column */}
          <div className={styles.SupremeLeft}>
            {/* 1. Animate: Heading and Paragraph Block (Entrance & Exit Animation) */}
            <div className={supremeContentClasses}>
              {/* Heading */}
              <h1 className={styles.SupremeHeading}>SUPREME BUILD IT</h1>

              {/* Paragraph (Static content) */}
              <p className={styles.SupremeParagraph}>
                Yorem ipsum dolor sit amet, consectetur
                adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin
                lacus, ut interdum tellus elit sed risus. Maecenas
                eget condimentum velit, sit amet feugiat lectus.
              </p>
            </div>

            {/* 2. Animate: Blending Image (Delay 1) */}
            <div className={`${styles.SupremeBlendingSection} ${isSupremeVisible ? styles.fadeInSlide + ' ' + styles.delay1 : ''}`}>
              <img src={Blending} alt="blending effect" className={styles.SupremeBlendingImage} />
            </div>

            {/* View Site Section (Static) */}
            <div className={styles.SupremeViewSite}>
              <svg className={styles.SupremeArrow}
                   href='#' 
                   width="166" 
                   height="66" 
                   viewBox="0 0 166 66" 
                   fill="none" 
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M53.2282 38.751C54.6263 39.2765 56.199 38.5714 56.5902 37.1299C57.8265 32.5737 57.9187 27.7673 56.8385 23.1428C55.5526 17.6376 52.6631 12.6374 48.5354 8.77446C44.4077 4.91149 39.2272 2.35927 33.649 1.44055C28.0708 0.521826 22.3455 1.27786 17.197 3.61305C12.0485 5.94824 7.70803 9.7577 4.72455 14.5597C1.74108 19.3617 0.24857 24.9406 0.435754 30.5908C0.622937 36.2411 2.48141 41.7089 5.77615 46.3029C8.54386 50.1621 12.2207 53.259 16.463 55.3302C17.8052 55.9855 19.3718 55.2668 19.8973 53.8687C20.4229 52.4707 19.706 50.9251 18.3787 50.2403C15.1321 48.5654 12.3153 46.1401 10.1714 43.1508C7.50008 39.426 5.99328 34.9928 5.84152 30.4117C5.68975 25.8306 6.89984 21.3074 9.31878 17.4141C11.7377 13.5207 15.2568 10.4321 19.4311 8.53879C23.6054 6.64548 28.2474 6.0325 32.7701 6.77738C37.2927 7.52226 41.493 9.59153 44.8396 12.7235C48.1862 15.8555 50.529 19.9096 51.5715 24.3731C52.4083 27.9553 52.3774 31.6722 51.4988 35.2182C51.1396 36.6679 51.8302 38.2254 53.2282 38.751Z" fill="black" />
                <path d="M20.9729 55.4191C20.4731 56.2237 20.7201 57.2811 21.5247 57.7809C22.3293 58.2807 23.3867 58.0337 23.8865 57.2291L22.4297 56.3241L20.9729 55.4191ZM40.6735 29.2542C40.458 28.3319 39.5356 27.7589 38.6132 27.9744L23.5828 31.4862C22.6604 31.7017 22.0874 32.6241 22.3029 33.5464C22.5184 34.4687 23.4408 35.0418 24.3632 34.8263L37.7236 31.7047L40.8452 45.0651C41.0607 45.9874 41.9831 46.5604 42.9054 46.3449C43.8278 46.1294 44.4008 45.207 44.1853 44.2847L40.6735 29.2542ZM22.4297 56.3241L23.8865 57.2291L40.4602 30.5494L39.0034 29.6444L37.5466 28.7394L20.9729 55.4191L22.4297 56.3241Z" fill="black" />
                <path d="M55.4785 42.0303L60.3807 56.3758H60.5785L65.4808 42.0303H68.3533L62.0148 59.6439H58.9444L52.6059 42.0303H55.4785ZM70.6905 59.6439V46.4337H73.262V59.6439H70.6905ZM71.9891 44.3954C71.5419 44.3954 71.1577 44.2463 70.8367 43.9482C70.5213 43.6443 70.3636 43.2831 70.3636 42.8645C70.3636 42.4402 70.5213 42.079 70.8367 41.7809C71.1577 41.477 71.5419 41.325 71.9891 41.325C72.4363 41.325 72.8176 41.477 73.133 41.7809C73.4541 42.079 73.6146 42.4402 73.6146 42.8645C73.6146 43.2831 73.4541 43.6443 73.133 43.9482C72.8176 44.2463 72.4363 44.3954 71.9891 44.3954ZM82.415 59.9105C81.1134 59.9105 79.9925 59.6325 79.0522 59.0763C78.1176 58.5144 77.3952 57.726 76.8849 56.7112C76.3803 55.6906 76.1281 54.4951 76.1281 53.1248C76.1281 51.7717 76.3803 50.5791 76.8849 49.547C77.3952 48.515 78.1062 47.7094 79.0178 47.1303C79.9352 46.5512 81.0074 46.2617 82.2344 46.2617C82.9797 46.2617 83.7022 46.3849 84.4017 46.6315C85.1012 46.878 85.729 47.2651 86.2852 47.7925C86.8413 48.32 87.2799 49.0052 87.601 49.848C87.9221 50.6852 88.0826 51.7029 88.0826 52.9012V53.8128H77.5815V51.8863H85.5627C85.5627 51.2098 85.4251 50.6106 85.1499 50.0889C84.8747 49.5614 84.4877 49.1457 83.9888 48.8418C83.4958 48.5379 82.9167 48.386 82.2516 48.386C81.5291 48.386 80.8984 48.5637 80.3595 48.9192C79.8262 49.269 79.4134 49.7276 79.121 50.2953C78.8343 50.8572 78.691 51.4678 78.691 52.1272V53.6322C78.691 54.5152 78.8458 55.2663 79.1554 55.8855C79.4708 56.5048 79.9094 56.9778 80.4713 57.3046C81.0332 57.6257 81.6897 57.7862 82.4408 57.7862C82.9281 57.7862 83.3725 57.7174 83.7738 57.5798C84.1752 57.4365 84.5221 57.2243 84.8145 56.9434C85.1069 56.6624 85.3305 56.3156 85.4853 55.9027L87.9192 56.3414C87.7243 57.0581 87.3745 57.6859 86.87 58.2249C86.3712 58.7581 85.7433 59.1738 84.9865 59.4719C84.2354 59.7643 83.3782 59.9105 82.415 59.9105ZM93.7761 59.6439L89.8887 46.4337H92.5463L95.135 56.135H95.264L97.8613 46.4337H100.519L103.099 56.0919H103.228L105.799 46.4337H108.457L104.578 59.6439H101.955L99.2718 50.1061H99.074L96.3906 59.6439H93.7761ZM127.12 46.6573C127.028 45.8431 126.65 45.2124 125.985 44.7652C125.32 44.3122 124.482 44.0858 123.473 44.0858C122.751 44.0858 122.126 44.2004 121.598 44.4298C121.071 44.6534 120.661 44.963 120.369 45.3586C120.082 45.7485 119.939 46.1929 119.939 46.6917C119.939 47.1102 120.036 47.4715 120.231 47.7753C120.432 48.0792 120.693 48.3344 121.014 48.5408C121.34 48.7415 121.69 48.9106 122.063 49.0482C122.436 49.1801 122.794 49.289 123.138 49.375L124.858 49.8222C125.42 49.9599 125.996 50.1462 126.587 50.3813C127.177 50.6164 127.725 50.926 128.229 51.3101C128.734 51.6943 129.141 52.1702 129.451 52.7378C129.766 53.3054 129.924 53.9848 129.924 54.7761C129.924 55.7737 129.666 56.6596 129.15 57.4336C128.639 58.2077 127.897 58.8183 126.922 59.2655C125.953 59.7127 124.781 59.9363 123.405 59.9363C122.086 59.9363 120.945 59.7271 119.982 59.3085C119.018 58.89 118.264 58.2965 117.72 57.5282C117.175 56.7542 116.874 55.8368 116.817 54.7761H119.483C119.534 55.4125 119.741 55.9429 120.102 56.3672C120.469 56.7857 120.936 57.0982 121.504 57.3046C122.077 57.5053 122.705 57.6056 123.387 57.6056C124.138 57.6056 124.806 57.4881 125.391 57.253C125.982 57.0122 126.446 56.6796 126.785 56.2554C127.123 55.8253 127.292 55.3236 127.292 54.7503C127.292 54.2285 127.143 53.8014 126.845 53.4688C126.552 53.1363 126.154 52.8611 125.649 52.6432C125.15 52.4253 124.586 52.2332 123.955 52.067L121.874 51.4993C120.463 51.1152 119.345 50.5504 118.52 49.805C117.7 49.0597 117.29 48.0735 117.29 46.8465C117.29 45.8317 117.565 44.9458 118.115 44.189C118.666 43.4321 119.411 42.8444 120.351 42.4259C121.292 42.0016 122.352 41.7895 123.534 41.7895C124.726 41.7895 125.778 41.9987 126.69 42.4173C127.607 42.8358 128.33 43.4121 128.857 44.146C129.385 44.8741 129.66 45.7112 129.683 46.6573H127.12ZM132.893 59.6439V46.4337H135.464V59.6439H132.893ZM134.192 44.3954C133.744 44.3954 133.36 44.2463 133.039 43.9482C132.724 43.6443 132.566 43.2831 132.566 42.8645C132.566 42.4402 132.724 42.079 133.039 41.7809C133.36 41.477 133.744 41.325 134.192 41.325C134.639 41.325 135.02 41.477 135.335 41.7809C135.657 42.079 135.817 42.4402 135.817 42.8645C135.817 43.2831 135.657 43.6443 135.335 43.9482C135.02 44.2463 134.639 44.3954 134.192 44.3954ZM145.09 46.4337V48.4978H137.875V46.4337H145.09ZM139.81 43.2687H142.381V55.7651C142.381 56.264 142.456 56.6395 142.605 56.8918C142.754 57.1383 142.946 57.3075 143.181 57.3992C143.422 57.4852 143.683 57.5282 143.964 57.5282C144.17 57.5282 144.351 57.5139 144.506 57.4852C144.66 57.4565 144.781 57.4336 144.867 57.4164L145.331 59.5407C145.182 59.5981 144.97 59.6554 144.695 59.7127C144.42 59.7758 144.076 59.8102 143.663 59.8159C142.986 59.8274 142.356 59.707 141.771 59.4547C141.186 59.2024 140.713 58.8125 140.352 58.2851C139.99 57.7576 139.81 57.0953 139.81 56.2984V43.2687ZM153.487 59.9105C152.185 59.9105 151.064 59.6325 150.124 59.0763C149.189 58.5144 148.467 57.726 147.957 56.7112C147.452 55.6906 147.2 54.4951 147.2 53.1248C147.2 51.7717 147.452 50.5791 147.957 49.547C148.467 48.515 149.178 47.7094 150.089 47.1303C151.007 46.5512 152.079 46.2617 153.306 46.2617C154.051 46.2617 154.774 46.3849 155.473 46.6315C156.173 46.878 156.801 47.2651 157.357 47.7925C157.913 48.32 158.352 49.0052 158.673 49.848C158.994 50.6852 159.154 51.7029 159.154 52.9012V53.8128H148.653V51.8863H156.634C156.634 51.2098 156.497 50.6106 156.222 50.0889C155.946 49.5614 155.559 49.1457 155.061 48.8418C154.567 48.5379 153.988 48.386 153.323 48.386C152.601 48.386 151.97 48.5637 151.431 48.9192C150.898 49.269 150.485 49.7276 150.193 50.2953C149.906 50.8572 149.763 51.4678 149.763 52.1272V53.6322C149.763 54.5152 149.917 55.2663 150.227 55.8855C150.542 56.5048 150.981 56.9778 151.543 57.3046C152.105 57.6257 152.761 57.7862 153.512 57.7862C154 57.7862 154.444 57.7174 154.846 57.5798C155.247 57.4365 155.594 57.2243 155.886 56.9434C156.179 56.6624 156.402 56.3156 156.557 55.9027L158.991 56.3414C158.796 57.0581 158.446 57.6859 157.942 58.2249C157.443 58.7581 156.815 59.1738 156.058 59.4719C155.307 59.7643 154.45 59.9105 153.487 59.9105Z" fill="black" />
              </svg>

            </div>

            {/* 3. Static: Website Preview (No fade-in, static) */}
            <div className={styles.SupremeBanner}>
              <img src={SupremeBannerImage} alt="website-preview" />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.SupremeRight}>
            {/* 4. Animate: Supreme Logo (Slide-from-Right, Delay 2) */}
            <img
              src={SupremeLogo}
              alt="Supreme logo"
              className={`${styles.SupremeLogoImage} ${isSupremeVisible ? styles.fadeInSlide + ' ' + styles.delay2 : ''}`}
            />
          </div>
        </div>
      </div>

      {/* RapidTrade */}
      <div className={styles.rapidtrade}></div>

      {/* Rhaddock */}
      <div className={styles.rhaddock}>
        <div className={styles.wrapper}>
          {/* Left Column (Original Sam's classes, unchanged) */}
          <div className={styles.left}>
            {/* Heading */}
            <h1 className={styles.heading}>R HADDOCK</h1>

            {/* Paragraph */}
            <p className={styles.paragraph1}>
              Yorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Etiam eu
              turpis molestie, dictum est <br /> a, mattis tellus. Sed dignissim, metus nec
              fringilla <br /> accumsan, risus sem sollicitudin lacus, ut interdum <br /> tellus
              elit sed risus. Maecenas eget condimentum <br /> velit, sit amet feugiat
              lectus.
            </p>

            {/* Blending Image */}
            <div className={styles.blendingSection}>
              <img src={Blending} alt="blending effect" className={styles.blendingImage} />
            </div>

            {/* View Site Section */}
            <div className={styles.viewSite}>
              <img
                src="https://via.placeholder.com/30x30"
                alt="arrow-icon"
                className={styles.arrow}
              />
              <span className={styles.viewText}>View Site</span>
            </div>

            {/* Website Preview */}
            <div className={styles.websitePreview}>
              <img src={Group72} alt="website-preview" />
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.right}>
            <div className={styles.logoCard}>
              <img
                src={RhLogo}
                alt="3D RH logo"
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent_Work;