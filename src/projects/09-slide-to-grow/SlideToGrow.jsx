import React, { useState } from "react";
import Slider from "./Slider";
import Title from "../../components/Title";
const SlideToGrow = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleValueChange = (e) => {
    setSliderValue(e.target.value);
  };
  let bgColor;
  let textColor;
  if (sliderValue < 25) {
    (bgColor = "red"), (textColor = "black");
  } else if (sliderValue > 25 && sliderValue <= 50) {
    (bgColor = "blue"), (textColor = "red");
  } else if (sliderValue > 50 && sliderValue <= 75) {
    (bgColor = "yellow"), (textColor = "red");
  } else if (sliderValue > 75 && sliderValue <= 99) {
    (bgColor = "green"), (textColor = "white");
  } else if (sliderValue == 100) {
    (textColor = "white"), (bgColor = "red");
  }
  return (
    <div className=" flex flex-col items-center mt-20 container mx-auto ">
      <Title text={"Slide To Grow"} />
      <Slider sliderValue={sliderValue} handleValueChange={handleValueChange} />
      <div
        className="mt-4  flex items-center justify-center rounded-full font-semibold"
        style={{
          background: bgColor,
          color: textColor,
          height: `${sliderValue * 3}px`,
          width: `${sliderValue * 3}px`,
        }}
      >
        <span>{sliderValue}</span>
      </div>
    </div>
  );
};

export default SlideToGrow;
