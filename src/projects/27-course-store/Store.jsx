import React, { useState } from "react";
import Button from "./../../components/Button";
import Courses from "./components/Courses";
import { currenciesDb } from "./db/currenciesDb";
import { CurrencyContext } from "./context/CurrencyContext";
const Store = () => {
  document.body.style.backgroundColor = "#282c34";
  document.body.style.color = "#eee";

  const [currency, setCurrency] = useState(currenciesDb.Euro);

  return (
    <CurrencyContext.Provider value={currency}>
        <div className=" container mx-auto p-1">
          <h4>Change currency:</h4>
          {Object.values(currenciesDb).map((currency) => (
            <Button key={currency.code} text={currency.label} classes={"btn-primary mx-2 px-2 py-1 text-sm mt-2"} onClick={()=>setCurrency(currency)}/>
          ))}
          <header className="my-2 flex flex-col gap-4 text-center">
            <h1 className=" font-semibold text-4xl">Courses</h1>
            <h3 className=" text-xl uppercase">Become a web developer</h3>
            <p className=" text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              officia laborum distinctio facere repellat quia praesentium saepe.
              Fugiat, corporis voluptas. Fugiat similique nobis eius tenetur! Ab,
              expedita culpa qturi eveniet earum iste pariatur labore sit nostrum
              accusantium repudiandae quas dignissimos veniam exercitationem
              provident vitae minus, laudantium deserunt? Rem tenetur necessitatibus
              sunt esse molestias nesciunt dignissimos distinctio provident
              reprehenderit dolorem aliquam, odit earum, facilis saepe corporis sit
              numquam!
            </p>
          </header>
          <Courses />
        </div>
    </CurrencyContext.Provider>
  );
};

export default Store;
