import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
const RegForm = () => {
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);
  const handleName = (e) => {
    setValues({ ...values, username: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  useEffect(() => {
    inputName.current.focus();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.username) {
      inputName.current.focus();
    } else if (!values.email) {
      inputEmail.current.focus();
    } else if (!values.password) {
      inputPassword.current.focus();
    }
    setSubmit(true);
    if (values.username && values.email && values.password) {
      setValid(true);
    }
  };
  return (
    <div className=" container mx-auto ">
      {submit && valid ? (
        <div className="text-center my-4">
          <Alert
            disappear={false}
            color={"alert-success"}
            text={"Register Successful"}
          />
          <Title text={`Welcome ${values.username}`} classes={"text-3xl font-bold my-4"} />
        </div>
      ) : (
        <div className="px-4 my-5 shadow-sm">
          <Title text={"Register Form"} />
          <div className="border p-5">
            <form action="" onSubmit={handleSubmit}>
              <div className=" my-3">
                <input
                  className="p-2 border w-full"
                  type="text"
                  name="username"
                  placeholder="Enter Your name"
                  id=""
                  ref={inputName}
                  onChange={handleName}
                />
                {submit && !values.username ? (
                  <label htmlFor="" className=" text-sm  my-2 text-red-500">
                    Enter username
                  </label>
                ) : null}
              </div>
              <div className=" my-3">
                <input
                  className="p-2 border w-full"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  id=""
                  ref={inputEmail}
                  onChange={handleEmail}
                />
                {submit && !values.email ? (
                  <label htmlFor="" className=" text-sm  my-2 text-red-500">
                    Enter email
                  </label>
                ) : null}
              </div>
              <div className=" my-3">
                <input
                  className="p-2 border w-full"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  id=""
                  ref={inputPassword}
                  onChange={handlePassword}
                />
                {submit && !values.password ? (
                  <label htmlFor="" className=" text-sm  my-2 text-red-500">
                    Enter password
                  </label>
                ) : null}
              </div>
              <div className="my-3">
                <Button text={"Register"} />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegForm;
