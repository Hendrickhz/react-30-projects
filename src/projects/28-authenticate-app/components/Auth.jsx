import React, { useContext } from "react";
import Button from "../../../components/Button";
import Alert from "../../../components/Alert";
import { AuthContext } from "../context/authContext";
const Auth = () => {
  const auth = useContext(AuthContext);
  return (
    <div className="mt-5 w-full">
      {auth.status == null ? (
        null
      ) : auth.status == true ? (
        <Alert text={"Success"} color={"alert-success"} />
      ) : null}
      {auth.status == null ? (
        <Button classes={"btn-primary w-full font-semibold"} text={"Login"} onClick={auth.login} />
      ) : auth.status == true ? (
        <Button classes={"btn-danger w-full font-semibold"} text={"Logout"} onClick={auth.logout}/>
      ) : (
        <Button classes={"btn-info w-full font-semibold"} text={"Try Again"} onClick={auth.login} />
      )}
    </div>
  );
};

export default Auth;
