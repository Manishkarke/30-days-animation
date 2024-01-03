import { useState } from "react";
import SectionTitle from "../SectionTitle";
import Boxes from "../Boxes";
import Button from "../Button";
import BoxContainer from "../BoxContainer";

export default function LinearRotate() {
  const [activateAnimation, setActivateAnimation] = useState(false);

  const activateAnimationFunc = () => {
    setActivateAnimation(!activateAnimation);
  };
  return (
    <div className="linear">
      <SectionTitle animationType={"Rotate"} Speed={"linear"} />

      <BoxContainer>
        <Boxes animationType={"rotate"} content={"normal box"} />

        <Boxes
          animationType={"rotate"}
          axis={"x"}
          content={"rotating 40deg in x-axis"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"rotate"}
          axis={"y"}
          content={"rotating 40deg in y axis"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"rotate"}
          axis={"z"}
          content={"rotating 40deg in z-axis"}
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
