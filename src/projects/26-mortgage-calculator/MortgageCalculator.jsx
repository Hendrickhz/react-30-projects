import React, { useState } from "react";
import Title from "../../components/Title";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";

const MortgageCalculator = () => {
  const [homeValue, setHomeValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //handlers
  const handleHomeValue = (e) => {
    setHomeValue(e.target.value);
  };
  const handleDownPayment = (e) => {
    setDownPayment(e.target.value);
  };
  const handleInterestRate = (e) => {
    setInterestRate(e.target.value);
  };
  const handleLoanDuration = (e) => {
    setLoanDuration(e.target.value);
  };

  const calculateLoanAmount = () => {
    setLoanAmount(homeValue - downPayment);
    return loanAmount;
  };
  const calculateMonthlyPayment = () => {
    function percentageToDecimal(percent) {
      return percent / 12 / 100;
    }
    function yearsToMonths(years) {
      return years * 12;
    }
    setMonthlyPayment(
      (percentageToDecimal(interestRate) * loanAmount) /
        (1 -
          Math.pow(
            1 + percentageToDecimal(interestRate),
            -yearsToMonths(loanDuration)
          ))
    );
    return monthlyPayment;
  };
  let alertType;
  monthlyPayment ? (alertType = "alert-success") : (alertType = "alert-danger");
  return (
    <div className=" mx-auto my-4 w-[500px] p-3 border shadow-sm">
      <Title text={"Mortgage Calculator"} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSubmitted(true);
        }}
        className="my-3 px-3 flex flex-col gap-5"
      >
        <div className="flex justify-between">
          <FormGroup
            label={"Home Value"}
            placeholder={"Enter the value of the house"}
            inputType="number"
            values={homeValue}
            onInput={handleHomeValue}
            onKeyUp={calculateLoanAmount}
          />
          <FormGroup
            label={"Down Payment"}
            placeholder={"Enter your funds"}
            inputType="number"
            onInput={handleDownPayment}
            values={downPayment}
            onKeyUp={calculateLoanAmount}
          />
        </div>
        <FormGroup
          label={"Loan amount "}
          placeholder={"Calculated amount of loan"}
          inputType="number"
          readonly={true}
          values={loanAmount}
          className={"bg-gray-200 text-black p-3"}
        />
        <div className="flex justify-between">
          <FormGroup
            label={"Interest Rate%"}
            placeholder={"Enter your interest rate"}
            inputType="number"
            onInput={handleInterestRate}
            values={interestRate}
          />
          <FormGroup
            label={"Loan duration (years)"}
            placeholder={"Enter the duration of the loan"}
            inputType="number"
            onInput={handleLoanDuration}
            values={loanDuration}
          />
        </div>
        <Button text={"Calculate"} onClick={calculateMonthlyPayment} />

        {isSubmitted && (
          <h3 className={`${alertType} text-center py-2 rounded`}>
            {monthlyPayment
              ? `Your monthly Payment : ${monthlyPayment.toFixed(2)}`
              : "Complete all fields"}
          </h3>
        )}
      </form>
    </div>
  );
};

export default MortgageCalculator;
