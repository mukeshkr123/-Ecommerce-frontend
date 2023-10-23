import React from "react";
import LoginPage from "../../pages/LoginPage";

const AuthRoute = ({ children }) => {
  //get user from local storage
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const isLoggedIn = user?.token ? true : false;

  if (!isLoggedIn) return <LoginPage />;

  return <>{children}</>;
};

export default AuthRoute;
