import React, { useEffect, useRef, useState } from "react";
import FormGroup from "../../components/FormGroup";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { FormAnimation, LoginContainer } from "./FormStyle";
const AnimatedLoginForm = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [rotate, setRotate] = useState({
    animation: "",
    borderColor: "",
    background: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.current.value !=="" && password.current.value !== ""){
      setRotate({
        animation: "animate",
        borderColor: "green",
        background: "green",
      })
    }else{
      setRotate({
        animation: "",
        borderColor: "red",
      })
    }
  };
  useEffect(() => {
    email.current.focus();
  }, []);
  return (
    <div className=" container mx-auto">
      <LoginContainer className={`flex flex-col gap-8 justify-center items-center ${rotate.animation}`}>
        <div className="mx-auto">
          <FormAnimation className={rotate.animation} borderColor={rotate.borderColor} background={rotate.background}></FormAnimation>
        </div>
        <div className="shadow-lg mt-10 p-4 w-[350px]">
          <Title text={"Login Form"} />
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <FormGroup
                reference={email}
                label={"Email"}
                inputType="email"
                placeholder={"Enter your email"}
              />
            </div>
            <div className="my-3">
              <FormGroup
                reference={password}
                label={"Password"}
                inputType="password"
                placeholder={"Enter your password"}
              />
            </div>
            <div className="my-3">
              <Button text={"Login"} />
            </div>
          </form>
          <div className="my-3 flex justify-between">
            <span className=" text-gray-500">Don't have an account?</span>{" "}
            <span className=" font-bold underline">Register</span>
          </div>
        </div>
      </LoginContainer>
    </div>
  );
};

export default AnimatedLoginForm;
