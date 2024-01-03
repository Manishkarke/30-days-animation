import { useState } from "react";
import SectionTitle from "../SectionTitle";
import Boxes from "../Boxes";
import Button from "../Button";
import BoxContainer from "../BoxContainer";

export default function LinearScale() {
  const [activateAnimation, setActivateAnimation] = useState(false);

  const activateAnimationFunc = () => {
    setActivateAnimation(!activateAnimation);
  };
  return (
    <div className="linear">
      <SectionTitle animationType={"Scale"} Speed={"linear"} />

      <BoxContainer>
        <Boxes animationType={"scale"} content={"normal box"} />

        <Boxes
          animationType={"scale"}
          axis={"x"}
          content={"scaling 1.25times in x-axis"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"scale"}
          axis={"y"}
          content={"scaling 1.25times in y axis"}
          isActive={activateAnimation}
        />
        <Boxes
          animationType={"scale"}
          axis={"xy"}
          content={"scaling 1.25times in both x-axis and y-axis"}
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
