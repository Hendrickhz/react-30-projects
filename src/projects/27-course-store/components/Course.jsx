import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/Button";
import { CurrencyContext } from "../context/CurrencyContext";

const Course = ({ course }) => {
  const currency = useContext(CurrencyContext);
  const contextPrice = new Intl.NumberFormat("em-Us", {
    style: "currency",
    currency: currency.code,
  }).format(course.price * currency.conversionRate);

  //change course bg
  const [courseBg, setCourseBg] = useState("text-white bg-blue-800");

  useEffect(() => {
    if(currency.code == "USD"){
        setCourseBg("bg-white text-black")
    }
    else if(currency.code == "EUR"){
        setCourseBg("text-white bg-blue-800")
    }
   else  if(currency.code == "GBP"){
        setCourseBg("text-white bg-green-800")
    }
  }, [currency.code]);
  return (
    <li className={`${courseBg} p-2 flex flex-col gap-3 rounded overflow-hidden w-[250px]`}>
      <h4 className="p-2 font-bold text-xl">{course.title}</h4>
      <div className="flex flex-col ">
        <div className="bg-gray-800">
          <img
            src={course.img}
            alt=""
            className="h-[150px] w-[150px] mx-auto  object-cover object-center"
          />
        </div>
        <p className=" mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quasi delectus veritatis nemo nesciunt voluptates eius voluptate velit
          inventore assumenda.
        </p>
      </div>
      <div className="p-2 flex justify-between items-center">
        <p className=" font-semibold">{contextPrice}</p>
        <Button classes={"btn-success"} text={"BUY"} />
      </div>
    </li>
  );
};

export default Course;
