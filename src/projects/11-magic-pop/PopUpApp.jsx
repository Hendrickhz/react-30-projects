import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";
import Title from "../../components/Title";
import Button from "../../components/Button";
const PopUpApp = () => {
  const [trigger, setTrigger] = useState(false);
  const onClickFun = () => {
    setTrigger(false);
  };
  const [timeTrigger, setTimeTrigger] = useState(false);
  const onClickTimeFun = () => {
    setTimeTrigger(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setTimeTrigger(true);
    }, 3000);
  }, []);
  return (
    <div>
      <div className="m-5 text-center flex flex-col gap-3 ">
        <Title text={"Click the button to see the pop up or wait 3 seconds"} />
        <span>
          <Button text={"click me"} onClick={() => setTrigger(true)} />
        </span>
      </div>
   
        <PopUp
          type="info"
          title={"Pop Up Info"}
          text={"This pop up is triggered by a button"}
          onClick={onClickFun}
          trigger= {trigger}
        />
        <PopUp
          type="warning"
          title={"Pop Up Waring"}
          text={"This pop up is triggered by a delay of 3 seconds"}
          onClick={onClickTimeFun}
          trigger= {timeTrigger}
        />
     
    </div>
  );
};

export default PopUpApp;
