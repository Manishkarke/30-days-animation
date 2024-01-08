import React from "react";

const LoadingAnimations = () => {
  return (
    <>
      <h2 className="animation-type">Loading Animations</h2>

      <div className="animations">
        <div className="loading-box">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="spinner"></div>

        <div className="bounce-loading">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        
      </div>
    </>
  );
};

export default LoadingAnimations;
