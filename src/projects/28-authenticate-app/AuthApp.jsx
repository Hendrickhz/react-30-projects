import React, { useEffect, useRef, useState } from "react";
import Title from "../../components/Title";
import FormGroup from "../../components/FormGroup";
import { Wrapper } from "./components/WrapperStyle";
import Auth from "./components/Auth";
import { AuthContext } from "./context/authContext";
const AuthApp = () => {
  const [ui, setUi] = useState({
    wrapper: true,
    title: "Authenticate",
  });
  const [animatedDenied, setAnimateDenied] = useState(false);
  const inputName = useRef();

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const [userAuth, setUserAuth] = useState({
    name: "",
    password: "",
  });

  const handleChangeName = (e) => {
    setUserAuth({ ...userAuth, name: e.target.value });
  };
  const handleChangePassword = (e) => {
    setUserAuth({ ...userAuth, password: e.target.value });
  };
  const clearInputs = () => {
    setUserAuth({
      name: "",
      password: "",
    });
  };
  const authenticate = () => {
    setUi({
      wrapper: false,
      title: `Welcome ${userAuth.name}`,
    });
  };
  const [authStatus, setAuthStatus] = useState();
  const login = () => {
    if (userAuth.name === "Hendrick" && userAuth.password === "asdffdsa") {
      setAuthStatus(true);
      clearInputs();
      authenticate();
    } else {
      setAuthStatus(false);
      setAnimateDenied(true);
      setTimeout(() => {
        setAnimateDenied(false);
      }, 600);
    }
  };
  const logout = () => {
    window.location.reload();
  };
  return (
    <div className=" container mx-auto mt-20">
      <div className="w-[300px] mx-auto">
        <Title text={ui.title} />
        <AuthContext.Provider
          value={{ status: authStatus, login: login, logout: logout }}
        >
          {ui.wrapper && (
            <Wrapper className={`${animatedDenied ? "active" : ""}`}>
              <FormGroup
                reference={inputName}
                label={"Username"}
                values={userAuth.name}
                onChange={handleChangeName}
                placeholder={"Enter Your name"}
              />
              <FormGroup
                label={"Password"}
                placeholder={"Enter Your password"}
                inputType="password"
                values={userAuth.password}
                onChange={handleChangePassword}
              />
            </Wrapper>
          )}
        <Auth />
        </AuthContext.Provider>
      </div>
    </div>
  );
};

export default AuthApp;
