import React, { useEffect, useState } from "react";
import "./ship.css";
import Button from "../../components/Button";
import SpaceShipObj from "./objects/SpaceShipObj";
import MoonObj from "./objects/MoonObj";
import PlanetObj from "./objects/PlanetObj";
import ship from "./svg/spacecraft-spaceship-svgrepo-com.svg";
import earth from "./svg/earth-svgrepo-com.svg";
import moon from "./svg/full-moon-moon-svgrepo-com.svg";
import penguin from "./svg/penguin-svgrepo-com.svg";
const SpacePenguinApp = () => {
  // const [shipAction, setShipAction] = useState();
  // const [transformScale, setTransformScale] = useState(200);
  const [shipType, setShipType] = useState(ship);
  const [shipProps, setShipProps] = useState({
    action: "",
    scale: 200,
    img: ship,
  });
  const startShip = () => {
    setShipProps({ action: "fly", scale: 50});
  };
  const landShip = () => {
    setShipProps({ action: "land", scale: 200 });
  };
  useEffect(() => {
    if (shipProps.action == "land") {
      setShipType(penguin);
      setTimeout(() => {
        setShipType(ship);
      }, 5500);
    }
    if(shipProps.action=="fly"){
      setShipType(ship)
    }
  }, [shipProps.action]);
  return (
    <div className="space">
      <Button text={"Launch"} classes={"btn btn-danger"} onClick={startShip} />
      <section className="env">
        <SpaceShipObj
          changeShip={shipType}
          scale={shipProps.scale}
          animation={shipProps.action}
        />
        <MoonObj moon={moon} />
        <PlanetObj planet={earth} />
      </section>
      <Button text={"Land"} classes={"btn btn-info"} onClick={landShip} />
    </div>
  );
};

export default SpacePenguinApp;
