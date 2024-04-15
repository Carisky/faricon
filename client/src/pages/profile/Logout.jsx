import React from "react";
import { useDispatch } from "react-redux";
import UserLoginService from "../../api/services/UserLoginService";

const CLEAR_USER = "CLEAR_USER";

const clearUser = () => ({
  type: CLEAR_USER,
});

const Logout = () => {
  const dispatch = useDispatch(); 

  const logout = async () => {
    try {
      await UserLoginService.logout();
      dispatch(clearUser());
      localStorage.removeItem("name")
      localStorage.removeItem("password")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return <button onClick={logout}>Log out</button>;
};

export default Logout;
