import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Define action types
const SET_USER = 'SET_USER';

// Define action creators
const setUser = (userData) => ({
  type: SET_USER,
  payload: userData
});

const Login = () => {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently, user } =
    useAuth0();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        console.log(token);
        
        // Dispatch action to set user data in Redux store
        dispatch(setUser({ role: "user", name: user.name, token: token }));
      }

      if (isAuthenticated) {
        console.log(userState)
        if (userState.role === "admin") {
          navigate("/admin");
        } else if (userState.role === "user") {
          navigate("/home");
        }
      }
    }

    fetchData();
  }, [user]); // Add user to dependency array

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;
