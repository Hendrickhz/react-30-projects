import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";

import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { BudgetStyle } from "./style/BudgetStyle";
import { v4 as uuidV4 } from "uuid";
import Alert from "./Alert";
const initialExpenses = (() => {
  try {
    return JSON.parse(localStorage.getItem("expenses")) || [];
  } catch (error) {
    console.error("Error parsing expenses from localStorage:", error);
    return [];
  }
})();
const ExpenseCalculator = () => {
  //state values
  const [expenses, setExpenses] = useState(initialExpenses); //all expenses

  const [date, setDate] = useState(""); //single expense
  const [name, setName] = useState(""); //single expense
  const [amount, setAmount] = useState(0); //single expense
  const [budget, setBudget] = useState(0); //budget
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
  });
  //ids
  const [id, setId] = useState();
  //references
  let inputBudget = useRef(null);

  const handleAlert = (type, text) => {
    setAlert({
      show: true,
      type: type,
      text: text,
    });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  //handlers
  const handleBudget = (e) => {
    setBudget(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleClearAllExpenses = () => {
    setExpenses([]);
    handleAlert("danger", "All expense records clear");
  };

  const handleEdit = (id) => {
    setEdit(true);
    let editedExpense = expenses.find((i) => i.id == id);
    let { name, amount, date } = editedExpense;
    setName(name);
    setAmount(amount);
    setId(id);
    setDate(date);
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete")) {
      setExpenses(expenses.filter((i) => i.id !== id));
      handleAlert("danger", "record deleted");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== "" && name !== "" && amount > 0) {
      if (edit) {
        let tempExpense = expenses.map((item) => {
          return item.id === id ? { ...item, date, name, amount } : item;
        });
        //set expenses
        setExpenses(tempExpense);
        setEdit(false);
        handleAlert("success", "Expense record edited");
      } else {
        const singleExpense = { id: uuidV4(), date, name, amount };
        //set expenses
        setExpenses([...expenses, singleExpense]);
        handleAlert("success", "Expense record added");
      }
      setName("");
      setAmount(0);
      setDate("");
    } else {
      handleAlert("danger", "Need to fill all fields");
    }
  };

  //effects
  useEffect(() => {
    inputBudget.current.value == 0 && inputBudget.current.focus();
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  return (
    <main className=" container mx-auto">
      <Title text={"Expense Calculator"} />
      <section className=" grid grid-cols-2 m-4 gap-6">
        <aside>
          {alert.show && <Alert type={alert.type} text={alert.text} />}
          <ExpenseForm
            handleAmount={handleAmount}
            handleDate={handleDate}
            handleExpenseName={handleName}
            handleSubmit={handleSubmit}
            date={date}
            amount={amount}
            expenseName={name}
            edit={edit}
          />
          <section className=" text-right bg-blue-500 shadow-md rounded-md p-4 my-4">
            <div className="card-body">
              {/* <BudgetStyle> */}
              <BudgetStyle>
                <span>Budget : $</span>
                <input
                  onChange={handleBudget}
                  type="number"
                  value={budget}
                  name=""
                  id=""
                  ref={inputBudget}
                />
              </BudgetStyle>
              {/* </BudgetStyle> */}
              <h3>
                Total Expenses : $
                {expenses.reduce((total, expense) => {
                  return (total += parseInt(expense.amount, 10));
                }, 0)}
              </h3>
              {/* Calc Economies */}
              <h3>Economies : $ {calcEconomies(budget, expenses)}</h3>
            </div>
          </section>
        </aside>
        <section>
          <ExpenseList
            clearAll={handleClearAllExpenses}
            expenses={expenses}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </section>
      </section>
    </main>
  );
};
function calcEconomies(budget, expenses) {
  return (
    budget -
    expenses.reduce((total, expense) => {
      return (total += parseInt(expense.amount, 10));
    }, 0)
  );
}
export default ExpenseCalculator;
