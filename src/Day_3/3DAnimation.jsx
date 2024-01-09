import React from "react";
import "./Day3.css";
import { CardFlip } from "./CardFlip";
import { BouncingBall } from "./BouncingBall";
export const ThreeDAnimation = () => {
  return (
    <section className="container">
      <h2 className="section-title">
        Day Three: <span>3d Animations</span>
      </h2>
      <hr />
      <CardFlip />
      <hr />
      <BouncingBall />
    </section>
  );
};
