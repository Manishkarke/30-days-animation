import React from "react";

export default function Button({ onClickHandle, activateAnimation }) {
  return (
    <button className="btn primary" onClick={onClickHandle}>
      {activateAnimation ? "remove animation" : "start animation"}
    </button>
  );
}
