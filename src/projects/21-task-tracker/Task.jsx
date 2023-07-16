import React from "react";
import Button from "../../components/Button";
const Task = ({ date, text, setDate, setText, onClick }) => {
  return (
    <div
      className=" flex"
      style={{ justifyContent: "space-between", marginBottom: "2rem" }}
    >
      <input type="date" value={date} onChange={setDate} />
      <input
        type="text"
        value={text}
        onChange={setText}
        placeholder="Specify the task"
      />
      <Button text={"+ Add"} onClick={onClick} />
    </div>
  );
};

export default Task;
