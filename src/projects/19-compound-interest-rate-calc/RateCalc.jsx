import React from "react";

const RateCalc = ({
  principleAmount,
  interestRate,
  years,
  monthlyContribution,
}) => {
  const A = {
    P: principleAmount,
    r: interestRate / 100,
    n: 12,
    t: years,
    PMT: monthlyContribution,
  };
  return (
    <div>
      ${" "}
      {A.PMT === null
        ? (A.P * Math.pow(1 + A.r / A.n, A.n * A.t)).toFixed(2)
        : (A.P * Math.pow(1 + A.r / A.n, A.n * A.t) +
          (A.PMT * Math.pow(1 + A.r / A.n, A.n * A.t) - 1) / (A.r / A.n)
          ).toFixed(2)}
    </div>
  );
};

export default RateCalc;
