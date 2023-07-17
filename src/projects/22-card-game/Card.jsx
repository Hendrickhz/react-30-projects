import React, { useEffect } from "react";
import shield from "./svg/shield-svgrepo-com.svg";
import sword from "./svg/sword-svgrepo-com.svg";
import horn from "./svg/horn-svgrepo-com.svg";
import unit from "./svg/knight-helmet-svgrepo-com.svg";
const Card = ({
  player,
  defenseValue,
  attackValue,
  unitTypeImg,
  unitTypeName,
  unitValue,
  moraleValue
}) => {
  let iconStyle = {
    marginRight: 10,
    width: 20,
    background: "transparent",
  };
  let mirror;
  function setMirror(player) {
    if (player == "player_2") {
      mirror = "scaleX(-1)";
    } else {
      mirror = " scaleX(1)";
    }
    return mirror
  }
    setMirror(player);

  return (
    <div
      className={`rounded text-center shadow-lg mt-4 ${
        player == "player_1"
          ? "border-blue-500 border"
          : " border border-red-500"
      }`}
    >
      <section
        className={`p-3 flex gap-4 justify-between  ${
          player == "player_1" ? "bg-blue-500 " : "  bg-red-500"
        }`}
      >
        <div className="defense flex">
          <img src={shield} style={iconStyle} alt="defense-img" />
          <span>{!defenseValue && "00"}</span>
        </div>
        <div className="attack flex ">
          <img src={sword} style={iconStyle} alt="defense-img" />
          <span>{!attackValue && "00"}</span>
        </div>
      </section>
      <section className="card-body">
        <div className="mb-1">
          {unitTypeName ?? "Unit Type Name"}
          <img
            src={unitTypeImg}
            alt="unitTypeImg"
            width={100}
            className="mx-auto bg-white p-2"
            style={{transform:mirror}}
          />
        </div>
      </section>
      <section
            className={`p-3 flex gap-4 justify-between  ${
              player == "player_1" ? "bg-blue-500 " : "  bg-red-500"
            }`}
          >
            <div className="defense flex">
              <img src={horn} style={iconStyle} alt="defense-img" />
              <span>{!moraleValue && "00"}</span>
            </div>
            <div className="attack flex ">
              <img src={unit} style={iconStyle} alt="defense-img" />
              <span>{!unitValue && "00"}</span>
            </div>
          </section>
    </div>
  );
};

export default Card;
