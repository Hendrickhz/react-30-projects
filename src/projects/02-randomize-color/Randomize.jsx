import React from "react";
import Title from "../../components/Title";

const Randomize = () => {
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const clickHandler = (e) => {
    const body = document.querySelector("body");
    body.style.backgroundColor = randomColor();
    e.target.style.backgroundColor = randomColor();
  };
  return (
    <div className="container ">
      <Title text={"Randomize color"} />
      <div className=" my-3">
        <button
          onClick={clickHandler}
          className=" px-2 py-1 mx-2 text-white bg-green-400"
        >
          Click Me
        </button>
        <button
          onClick={clickHandler}
          className=" px-2 py-1 mx-2 text-white bg-red-400"
        >
          {" "}
          Me Two
        </button>
        <button
          onClick={clickHandler}
          className=" px-2 py-1 mx-2 text-white bg-orange-400"
        >
          And Me
        </button>
        <button
          onClick={clickHandler}
          className=" px-2 py-1 mx-2 text-white bg-purple-400"
        >
          Also Me
        </button>
      </div>
    </div>
  );
};

export default Randomize;
