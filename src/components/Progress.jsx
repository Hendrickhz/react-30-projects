import React from "react";

const Progress = ({progressData=0,bgColor="blue"}) => {
  const containerStyle = {
    background: "#e0e0de",
    maxWidth: "500px",
    height: 25,
    borderRadius: 50,
    margin:"20px auto"
  };
  const fillerStyle = {
    backgroundColor:bgColor,
    borderRadius: "inherit",
    height: "100%",
    width: `${progressData > 100 ? 100 :progressData}%`,
    textAlign: "right",
    transition: "width 1s ease-in-out"
  };
  const labelStyle = {
    fontWeight: "700",
    color: "white",

    padding: 15,
    margin: 10,
  };
  return (
    <div className="" style={containerStyle}>
      <div className="" style={fillerStyle}>
        <span className=" " style={labelStyle}>
          {progressData}%
        </span>
      </div>
    </div>
  );
};

export default Progress;
