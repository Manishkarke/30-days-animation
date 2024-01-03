import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import Boxes from "../Boxes";
import Button from "../Button";
import BoxContainer from "../BoxContainer";

export default function LinearTranslate() {
  const [activateAnimation, setActivateAnimation] = useState(false);

  const activateAnimationFunc = () => {
    setActivateAnimation(!activateAnimation);
  };
  return (
    <div className="linear">
      <SectionTitle animationType={"Translate"} Speed={"linear"} />

      <BoxContainer>
        <Boxes animationType={"translate"} content={"normal box"} />

        <Boxes
          animationType={"translate"}
          axis={"x"}
          content={"moving 70px to right"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"translate"}
          axis={"y"}
          content={"moving 70px to down"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"translate"}
          axis={"xy"}
          content={"Moving 70px to left and 70px to down"}
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
