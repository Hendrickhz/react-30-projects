import React from "react";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";
import { MdEdit, MdAddCircle } from "react-icons/md";
const ExpenseForm = ({
  date,
  handleSubmit,
  handleDate,
  handleAmount,
  handleExpenseName,
  amount,
  expenseName,
  edit,
}) => {
  return (
    <form
      className=" text-white flex flex-col gap-4 rounded shadow-sm bg-blue-600 p-4"
      onSubmit={handleSubmit}
    >
      <FormGroup
        label={"Date"}
        inputType="date"
        values={date}
        onChange={handleDate}
      />
      <FormGroup
        label={"Expense"}
        inputType="text"
        values={expenseName}
        onChange={handleExpenseName}
        placeholder={"Eg. rent..."}
      />
      <FormGroup
        label={"Amount"}
        inputType="number"
        values={amount}
        onChange={handleAmount}
        placeholder={"Eg. 150..."}
      />
      {edit ? (
        <button className={"btn-info flex justify-center items-center py-3 gap-3"}>
          <span>Edit</span>
          <MdEdit />
        </button>
      ) : (
        <button className={"btn-info flex justify-center items-center py-3 gap-3"}>
          <span>Add</span>
          <MdAddCircle />
        </button>
      )}
    </form>
  );
};

export default ExpenseForm;
