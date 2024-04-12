import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const Logout = () => {
    const user = useSelector((state)=>state.user)
    const handleLogOut = ()=>{

    }

  const { logout } = useAuth0();
  return <button onClick={() => logout()}>Log out</button>;
};

export default Logout;