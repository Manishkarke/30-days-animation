import React, { useState } from "react";

function HamburgerMenu() {
    const [activeMenu, setActiveMenu] = useState(false);
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    }
  return (
    <>
      <h2 className="animation-type">hamburger menu Button</h2>

      <div className={`hamburger-menu ${activeMenu ? "active" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
}

export default HamburgerMenu;
