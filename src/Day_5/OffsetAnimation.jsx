import React from "react";
import "./OffsetAnimation.css";
export const OffsetAnimation = () => {
  return (
    <section className="container">
      <h2 className="section-title">
        Day Three: <span>Learning about Offset animations</span>
      </h2>

      <div className="animation-container">
        <div className="animation">
          I am gonna move in <br />
          <strong>path("M0,0 L200,0 200,300 0,300 z")</strong>
          <div className="rectangle path"></div>
        </div>

        <div className="animation">
          I'm gonna move in <br />
          <strong>ellipse(300px 100px at 50% 50%)</strong>
          <div className="rectangle ellipse"></div>
        </div>

        <div className="animation">
          I'm gonna move in <br />
          <strong>circle(200px at 50% 50%)</strong>
          <div className="rectangle circle"></div>
        </div>

        <div className="animation">
          I'm gonna move inside the box 10% away from the borders
          <div className="rectangle inset"></div>
        </div>

        <div className="animation">
          I'm gonna move in a dynamic path
          <div className="rectangle dynamic-path"></div>
        </div>
      </div>
    </section>
  );
};
