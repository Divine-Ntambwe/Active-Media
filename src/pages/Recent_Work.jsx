import styles from "./Recent_Work.module.css";

// Import the 3D RH logo
import RhLogo from "../assets/Frame 203.png";
import Group72 from "../assets/Group 72.png";
import Blending from "../assets/blending 1755804129410.png";

import SupremeLogo from "../assets/SupremeLogo.png"
import SupremeBanner from "../assets/SupremeBanner.jpg"

const Recent_Work = () => {
  return (
    <>
      {/* Supreme */}
      <div className={styles.supreme}>
        <div className={styles.wrapper}>
        {/* Left Column */}
        <div className={styles.left}>
          <div className={styles.Supreme}>
            {/* Heading */}
          <h1 className={styles.heading}>SUPREME BUILD IT</h1>

          {/* Paragraph */}
          <p className={styles.paragraph1}>
            Yorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, 
            metus nec fringilla accumsan, risus sem sollicitudin 
            lacus, ut interdum tellus elit sed risus. Maecenas 
            eget condimentum velit, sit amet feugiat lectus.
          </p>
          </div>

          {/* Blending Image */}
          <div className={styles.blendingSection}>
            <img src={Blending} alt="blending effect" className={styles.blendingImage} />
          </div>

          {/* View Site Section */}
          <div className={styles.viewSite}>
            {/* <img
              src="https://via.placeholder.com/30x30"
              alt="arrow-icon"
              className={styles.arrow}
            />
            <span className={styles.viewText}>View Site</span> */}
          </div>

          {/* Website Preview */}
          <div className={styles.websitePreview}>
            <img src={SupremeBanner} alt="website-preview" />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.right}>
            <img
              src={SupremeLogo}
              alt="Supreme logo"
              className={styles.SupremeLogo}
            />
        </div>
      </div>
      </div>
      {/* RapidTrade */}
      <div className={styles.rapidtrade}></div>

      {/* Rhaddock */}
      <div className={styles.rhaddock}>
        <div className={styles.wrapper}>
        {/* Left Column */}
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
