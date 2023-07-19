import React from "react";
import { MdDelete } from "react-icons/md";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = ({ clearAll, expenses, handleEdit,handleDelete }) => {
  return (
    <>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id}  expense={expense} handleItemDelete={handleDelete} handleItemEdit={handleEdit}/>
        ))}
      </ul>
      {expenses.length > 0 && (
        <button
          className="btn btn-danger flex gap-2 items-center"
          onClick={clearAll}
        >
          <MdDelete />
          <span> Clear All</span>
        </button>
      )}
    </>
  );
};

export default ExpenseList;
