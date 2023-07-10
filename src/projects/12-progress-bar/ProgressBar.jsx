import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import Progress from "../../components/Progress";

const ProgressBar = () => {
  const [random, setRandom] = useState(8);
  const [dataValues, setDataValues] = useState({
    ui: 43,
    ux: 50,
    project: 79,
  });
  const dataArr = [
    {
      bgColor: "green",
      data: dataValues.ui,
    },
    {
      bgColor: "blue",
      data: dataValues.ux,
    },
    {
      bgColor: "purple",
      data: dataValues.project,
    },
  ];
  const inputStyle = {
    border: " 1px solid lightgray",
    outline: "none",
    padding: "5px 8px",
    borderRadius: "8px",
  };
  const uiRef = useRef(null);
  const uxRef = useRef(null);
  const progressRef = useRef(null);
  useEffect(() => {
    uiRef.current.focus();

    setInterval(()=>
        setRandom(Math.floor(Math.random()*100)+1)
    ,5000)

  }, []);
  return (
    <div className=" container mx-auto mt-[10vh] text-center">
      <Title text={"Progress Bar"} />
      <h2 className="  text-xl font-semibold mt-4">Progress Status:</h2>
      <div className="my-3">
        <label htmlFor="">Ui Status</label>{" "}
        <input
          type="number"
          style={inputStyle}
          ref={uiRef}
          min={0}
          max={100}
          value={dataValues.ui}
          onChange={(e) => setDataValues({ ...dataValues, ui: e.target.value })}
        />
      </div>
      <div className="my-3">
        <label htmlFor="">UX Status</label>{" "}
        <input
          type="number"
          style={inputStyle}
          ref={uxRef}
          min={0}
          max={100}
          value={dataValues.ux}
          onChange={(e) => setDataValues({ ...dataValues, ux: e.target.value })}
        />
      </div>
      <div className="my-3">
        <label htmlFor="">Project Progress</label>{" "}
        <input
          type="number"
          style={inputStyle}
          ref={progressRef}
          min={0}
          max={100}
          value={dataValues.project}
          onChange={(e) =>
            setDataValues({ ...dataValues, project: e.target.value })
          }
        />
      </div>
      <div className="">
        {dataArr.map((data, index) => (
          <Progress
            key={index}
            bgColor={data.bgColor}
            progressData={data.data}
          />
        ))}
      </div>
      <div className="">
        <Title text={"Random Progress Bar"}/>
        <Progress
          bgColor={
            random < 25
              ? "red"
              : random < 50
              ? "orange"
              : random < 75
              ? "blue"
              : "green"
          }
          progressData={random}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
