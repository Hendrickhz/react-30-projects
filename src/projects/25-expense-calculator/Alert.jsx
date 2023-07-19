import React from "react";

const Alert = ({ type, text }) => {
  return <div className={` p-4 rounded my-3 alert-${type}`}>{text}</div>;
};

export default Alert;
