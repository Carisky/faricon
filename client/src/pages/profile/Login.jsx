import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import UserLoginService from "../../api/services/UserLoginService";

const SET_USER = "SET_USER";

const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const changeVisability = () => {
    setShowPassword(!showPassword);
  };

  const loginWithRedirect = (userState) => {
    if (typeof userState !== "undefined") {
      if (userState.role === "ADMIN") {
        navigate("/admin");
      } else if (userState.role === "USER") {
        navigate("/home");
      }
    }
  };

  const onSubmit = async (data) => {

    localStorage.setItem("name",data.username)
    localStorage.setItem("password",data.password)

    try {
      const response = await UserLoginService.login(
        data.username,
        data.password
      );
      dispatch(
        setUser({
          name: response.data.name,
          role: response.data.authorities[0].authority,
          password: data.password,
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    loginWithRedirect(data);
  };

  useEffect(() => {
    loginWithRedirect(userState);
    // eslint-disable-next-line
  }, [userState]);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <OutlinedInput
          label="Username"
          {...register("username")}
          fullWidth
          margin="normal"
          error={!!errors.cargo_quantity}
        />
        <OutlinedInput
          label="Password"
          {...register("password")}
          fullWidth
          margin="normal"
          type={showPassword === true ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              {showPassword ? (
                <VisibilityOffIcon
                  onClick={changeVisability}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              ) : (
                <VisibilityIcon
                  onClick={changeVisability}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              )}
            </InputAdornment>
          }
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "space-around",
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            <Box>Login</Box>
            <SendIcon />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
