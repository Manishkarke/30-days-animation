import React from "react";

function Boxes({ animationType, axis, content, isActive }) {
  const generateActiveBoxName = () => {
    if (animationType === "translate") return `isMoving-${axis}`;
    else if (animationType === "scale") return `isScaling-${axis}`;
    else if (animationType === "rotate") return `isRotating-${axis}`;
    else if (animationType === "skew") return `isSkewing-${axis}`;
  };

  return (
    <div
      className={`box ${animationType}-box grid-center ${
        isActive ? generateActiveBoxName() : ""
      }`}
    >
      {content}
    </div>
  );
}

export default Boxes;
