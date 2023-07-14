import React, { useEffect, useRef, useState } from "react";
import FormGroup from "../../components/FormGroup";
import RateCalc from "./RateCalc";
const CompoundInterestRateApp = () => {
  const [compound, setCompound] = useState({
    principleAmount: "",
    monthlyContribution: null,
    interestRate: "",
    years: "",
  });
  let inputPrincipleRef = useRef(null);
  useEffect(() => {
    inputPrincipleRef.current.focus();
  }, []);
  return (
    <div className=" w-[90%] mt-10 mx-auto">
      <div className="flex items-center justify-center">
        <div className=" rounded border p-5  shadow-sm max-w-[300px] overflow-hidden">
          <div className="">
            <FormGroup
              label={"Principle Amount $"}
              inputType="number"
              onChange={(e) =>
                setCompound({ ...compound, principleAmount: e.target.value })
              }
              reference={inputPrincipleRef}
              values={compound.principleAmount}
            />
            <FormGroup
              label={"Monthly Contribution $"}
              inputType="number"
              values={compound.monthlyContribution}
              onChange={(e) =>
                setCompound({
                  ...compound,
                  monthlyContribution: e.target.value,
                })
              }
            />
            <FormGroup
              label={"Interest Rate $"}
              inputType="number"
              values={compound.interestRate}
              onChange={(e) =>
                setCompound({ ...compound, interestRate: e.target.value })
              }
            />
            <FormGroup
              label={"YEar of investment $"}
              inputType="number"
              values={compound.years}
              onChange={(e) =>
                setCompound({ ...compound, years: e.target.value })
              }
            />
          </div>
          <div className="bg-purple-500 mt-3 text-white p-2  text-right">
            <RateCalc
              interestRate={compound.interestRate}
              years={compound.years}
              monthlyContribution={compound.monthlyContribution}
              principleAmount={compound.principleAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestRateApp;
