import React from "react";

export const BouncingBall = () => {
  return (
    <>
      <h2 className="animation-type">3d Card Flip</h2>
      <div className="container-3d">
        <div className="scene">
          <div className="floor"></div>
          <div className="cube">
            <div className="cube-sides front"></div>
            <div className="cube-sides back"></div>
            <div className="cube-sides left"></div>
            <div className="cube-sides right"></div>
            <div className="cube-sides top">
              <div className="ballShadow"></div>
            </div>
            <div className="cube-sides bottom"></div>
          </div>
          <div className="ball-3d"></div>
        </div>
      </div>
    </>
  );
};
