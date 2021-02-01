import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import Card from "./UI/Card";

import "./Auth.css";

const Auth = () => {
  const authContext = useContext(AuthContext);
  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="auth">
      <Card>
        <p>لطفا برای ادامه وارد شوید.</p>
        <button onClick={loginHandler}>ورورد</button>
      </Card>
    </div>
  );
};

export default Auth;
