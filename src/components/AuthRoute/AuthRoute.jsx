import React from "react";
import LoginForm from "../User/Login/LoginForm";

const AuthRoute = ({ children }) => {
  //get user from local storage
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const isLoggedIn = user?.token ? true : false;

  if (!isLoggedIn) return <LoginForm />;

  return <>{children}</>;
};

export default AuthRoute;
