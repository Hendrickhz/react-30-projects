import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
const Alert = ({ text, color, showTime = 3000, disappear = true }) => {
  const [showAlert, setShowAlert] = useState(true);
  const divRef = useRef();
  const removeAlert = () => {
    divRef.current.classList.add("alert");
    setTimeout(() => {
      setShowAlert(false);
    }, 500);
  };
  useEffect(() => {
    if (disappear) {
      setTimeout(() => {
        setShowAlert(false);
      }, showTime);
    }
  }, []);
  if (showAlert) {
    return (
      <div
        ref={divRef}
        className={`  items-center  flex justify-between mx-auto w-56 px-3 py-2 rounded  ${
          color ? color : "alert-primary"
        }`}
      >
        <span>{text ?? "Default"}</span>
        <Button
          classes={"text-white bg-transparent"}
          onClick={removeAlert}
          text={"X"}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Alert;
