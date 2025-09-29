import React from "react";
import styles from "./Rhaddock.module.css";

// Import the 3D RH logo
import RhLogo from "../assets/Frame 203.png";
import Group72 from "../assets/Group 72.png";
import Blending from "../assets/blending 1755804129410.png";


const Rhaddock = () => {
    return (
        <div className={styles.wrapper}>
            {/* Left Column */}
            <div className={styles.left}>
                {/* Heading */}
                <h1 className={styles.heading}>R HADDOCK</h1>

                {/* Paragraph */}
                <p className={styles.text}>
                    Yorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Etiam eu
                    turpis molestie, dictum est <br /> a, mattis tellus. Sed dignissim, metus nec
                    fringilla <br />accumsan, risus sem sollicitudin lacus, ut interdum <br />tellus
                    elit sed risus. Maecenas eget condimentum <br /> velit, sit amet feugiat
                    lectus.
                </p>

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
                    <img
                        src={Group72}
                        alt="website-preview"
                    />
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
    );
};

export default Rhaddock;
