import React from "react";

export default function SectionTitle({ animationType, Speed }) {
  return (
    <h3 className="animation-type">
      {animationType} boxes in <span className="speed-type">{Speed} speed</span>
    </h3>
  );
}
