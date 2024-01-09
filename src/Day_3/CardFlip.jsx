import React from "react";

export const CardFlip = () => {
  return (
    <>
      <h2 className="animation-type">3d Card Flip</h2>
      <div className="container-pers">
        hover me
        <div className="card">
          <div className="card__content back">
            <p>this is back content</p>
          </div>
          <div className="card__content front">
            <p>this is front content</p>
          </div>
        </div>
      </div>
    </>
  );
};
