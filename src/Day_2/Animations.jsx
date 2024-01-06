import React from "react";
import "./Day2.css";
import ModalAnimation from "./ModalAnimation";
import HamburgerMenu from "./HamburgerMenu";

function Animations() {
  return (
    <section className="container">
      <h2 className="section-title">
        Day Two: <span>Simple 2d Animations</span>
      </h2>

      <hr />
      <ModalAnimation />
      <hr />
      <HamburgerMenu />
    </section>
  );
}

export default Animations;
