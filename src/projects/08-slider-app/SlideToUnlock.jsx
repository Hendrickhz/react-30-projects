import React, { useState } from "react";
import LockSlider from "./LockSlider";
import { AiFillUnlock } from "react-icons/ai";

const SlideToUnlock = () => {
  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url("https://images.unsplash.com/photo-1677019441252-b702d717e4f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
  });
  const [showLockSlider, setShowLockSlider] = useState(true);
  const [lockSliderValue, setLockSliderValue] = useState(0);
  const handleSliderInput = (e) => {
    setLockSliderValue(e.target.value);
    console.log(lockSliderValue);

    if (lockSliderValue >= 90) {
      setShowLockSlider(false);
      setUiProps({
        uiText: " Screen Unlock",
        uiColor: "#fff",
        uiBg: `url("https://images.unsplash.com/photo-1688462035292-61c6407a639c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
      })
    }
  };
  const handleIcon = () => {
    setShowLockSlider(true);
    setLockSliderValue(0);
    setUiProps({
      uiText: "  Unlock Screen",
      uiColor: "#000",
      uiBg: `url("https://images.unsplash.com/photo-1677019441252-b702d717e4f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
    })
  };

  return (
    <div
      className=" rounded-lg container mx-auto flex  flex-col h text-center"
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg,
      }}
    >
      <p style={{color:uiProps.uiColor}} className=" select-none text-2xl font-semibold">{uiProps.uiText}</p>
      <div className="mt-auto text-center mx-auto">
        {showLockSlider ? (
          <LockSlider
            width={"250px"}
            sliderValue={lockSliderValue}
            handleInput={handleSliderInput}
          />
        ) : (
          <AiFillUnlock onClick={handleIcon} className="unlockIcon" />
        )}
      </div>
    </div>
  );
};

export default SlideToUnlock;
