import "./2dTransition.css";
import LinearTranslate from "./Translate/LinearTranslate";
import EaseTranslate from "./Translate/EaseTranslate";
import CubicTranslate from "./Translate/CubicTranslate";
import LinearRotate from "./Rotate/LinearRoate";
import EaseRotate from "./Rotate/EaseRotate";
import CubicRotate from "./Rotate/CubicRotate";
import LinearSkew from "./Skew/LinearSkew";
import EaseSkew from "./Skew/EaseSkew";
import CubicSkew from "./Skew/CubicSkew";

function SimpleTransition() {
  return (
    <section className="container">
      <h2 className="section-title">
        Day One: <span>Simple 2d Transition</span>
      </h2>
      <p className="description">
        transition property allow us to create simple animations between two
        states. for example if we wanna move a box from one place to another we
        can do that with transition property.
      </p>
      <hr />
      {/* translate component */}
      <LinearTranslate />
      <hr />
      <EaseTranslate />
      <hr />
      <CubicTranslate />
      <hr />
      {/* Rotate components */}
      <LinearRotate />
      <hr />
      <EaseRotate />
      <hr />
      <CubicRotate />
      <hr />
      {/* Skew Components */}
      <LinearSkew />
      <hr />
      <EaseSkew />
      <hr />
      <CubicSkew />
      <hr />
      {/* Scaling Components */}
    </section>
  );
}

export default SimpleTransition;
