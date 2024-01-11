import React from "react";
import "./Gradients.css";
import { LinearGradient } from "./LinearGradient";

export const Gradient = () => {
  return (
    <section className="container">
      <h2 className="section-title">
        Day Three: <span>Learning about gradients</span>
      </h2>
      <hr />
      <LinearGradient />
    </section>
  );
};
