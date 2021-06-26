import React, { useState } from "react";
import { mrContext } from "../../Helper/Context";
import AuthForm from "./subComponents/AuthForm";
import Main from "../MainPage/Main";
import TopNav from "../TopNav/TopNav";

function Login() {
  const { Provider } = mrContext;
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState([]);

  const contextValues = { loggedIn, setLoggedIn, data, setData };

  return (
    <Provider value={contextValues}>
      <TopNav />
      {loggedIn ? <Main /> : <AuthForm />}
    </Provider>
  );
}

export default Login;
