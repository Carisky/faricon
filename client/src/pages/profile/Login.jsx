import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import UserLoginService from "../../api/services/UserLoginService";
import { dismissToast, showToast } from "../../Components/Toast/showToast";

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
    setTimeout(() => {
      if (typeof userState !== "undefined") {
        if (userState.role === "ADMIN") {
          navigate("/admin");
        } else if (userState.role === "USER") {
          navigate("/home");
        } else if (userState.role === "DRIVER") {
          navigate("/driver");
        }
      }
    }, 1200);
  };

  const onSubmit = async (data) => {
    localStorage.setItem(
      "credentials",
      btoa(data.username + ":" + data.password)
    );

    const loadingToastId = await showToast("Logging in...");

    try {
      const response = await UserLoginService.login(
        data.username,
        data.password
      );

      dismissToast(loadingToastId);

      dispatch(
        setUser({
          name: response.data.name,
          role: response.data.authorities[0].authority,
          password: data.password,
        })
      );

      showToast("Login successful!", "success");

      setTimeout(() => {
        loginWithRedirect(data);
      }, 1200);
    } catch (error) {
      dismissToast(loadingToastId);
      console.error("Error fetching data:", error);
      showToast("Wrong Credentionals", "error");
    }
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
        <TextField
          required={true}
          label="Username"
          {...register("username")}
          fullWidth
          margin="normal"
          error={!!errors.cargo_quantity}
          sx={{
            color: "#fff",
            marginBottom: "20px",
          }}
        />
        <TextField
          required={true}
          label="Password"
          {...register("password")}
          fullWidth
          sx={{
            marginBottom: "20px",
          }}
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
