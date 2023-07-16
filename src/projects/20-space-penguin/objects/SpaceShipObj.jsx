import React from "react";

const SpaceShipObj = ({ changeShip, scale, animation }) => {
  return (
    <>
      <img
        src={changeShip}
        alt="Space Ship"
        style={{ position: "absolute", bottom: 50, zIndex: 1, width: scale }}
        className={animation}
      />
    </>
  );
};

export default SpaceShipObj;
