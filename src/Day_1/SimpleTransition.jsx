import "./2dTransition.css";
import LinearTranslate from "./Translate/LinearTranslate";
import EaseTranslate from "./Translate/EaseTranslate";
import CubicTranslate from "./Translate/CubicTranslate";
import LinearRotate from "./Rotate/LinearRoate";
import EaseRotate from "./Rotate/EaseRotate";
import CubicRotate from "./Rotate/CubicRotate";
import LinearSkew from "./Skew/LinearSkew";

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
      <LinearTranslate />
      <hr />
      <EaseTranslate />
      <hr />
      <CubicTranslate />
      <hr />
      <LinearRotate />
      <hr />
      <EaseRotate />
      <hr />
      <CubicRotate />
      <hr />
      <LinearSkew />
    </section>
  );
}

export default SimpleTransition;
