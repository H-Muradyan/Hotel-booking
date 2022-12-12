import React from "react";
import border1 from "/images/border1.svg";
import border2 from "/images/border2.svg";
import styles from "../../styles/Header.module.css";

const MobileIcon = ({ openMobileNav, showMobNav }) => {
  return (
    <div className="">
      <div onClick={openMobileNav} className="h-1 text-center cursor-pointer">
        <div className={`${showMobNav ? styles.mobIcon1 : styles.mobIcon} h-3`}>
          <img src={border1} alt="border" />
        </div>
        <div className={`${showMobNav ? styles.mobIconRotate2 : styles.mobIconRotate1} ml-4`}>
          <img src={border2} alt="border" />
        </div>
      </div>
    </div>
  );
};

export default MobileIcon;
