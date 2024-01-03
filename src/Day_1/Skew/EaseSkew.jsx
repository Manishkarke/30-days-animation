import { useState } from "react";
import SectionTitle from "../SectionTitle";
import Boxes from "../Boxes";
import Button from "../Button";
import BoxContainer from "../BoxContainer";

export default function EaseSkew() {
  const [activateAnimation, setActivateAnimation] = useState(false);

  const activateAnimationFunc = () => {
    setActivateAnimation(!activateAnimation);
  };
  return (
    <div className="ease">
      <SectionTitle animationType={"Skew"} Speed={"ease"} />

      <BoxContainer>
        <Boxes animationType={"skew"} content={"normal box"} />

        <Boxes
          animationType={"skew"}
          axis={"x"}
          content={"skewing 40deg in x-axis"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"skew"}
          axis={"y"}
          content={"skewing 40deg in y axis"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"skew"}
          axis={"xy"}
          content={"skewing 40deg in both x-axis and y-axis"}
          isActive={activateAnimation}
        />
      </BoxContainer>

      <Button
        onClickHandle={activateAnimationFunc}
        activateAnimation={activateAnimation}
      />
    </div>
  );
}
