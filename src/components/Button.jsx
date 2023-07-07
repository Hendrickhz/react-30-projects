import React from "react";

const Button = ({ text, classes, onClick = null , icon=null}) => {
  return (
    <button 
    className={`btn ${classes ? classes : "btn-primary"} ${icon ? 'flex justify-between items-center gap-3':''}`}
    onClick={onClick}
    >
    {icon ?? ""}
     <span> {text ? text : ""}</span>
    </button>
  );
};

export default Button;
