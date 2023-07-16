import React from "react";
import { NewTaskStyle } from "./TableStyle";
import Button from "../../components/Button";
import { RiDeleteBin6Fill } from "react-icons/ri";

const NewTask = ({ text, date, taskClick, onDelete }) => {
  return (
    <NewTaskStyle onClick={taskClick}>
      <div className="">
        <h3 className=" text-xl font-bold">{text}</h3>
        <small className="text-red-500">{date}</small>
      </div>
      <Button
        icon={<RiDeleteBin6Fill />}
        classes={"justify-center btn-danger "}
        text={""}
        onClick={onDelete}
      />
    </NewTaskStyle>
  );
};

export default NewTask;
