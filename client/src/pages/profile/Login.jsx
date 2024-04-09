import React, { useState } from "react";
import {
  Dialog,
  TextField,
  DialogContent,
  DialogActions,
  Button,
  Box,
  IconButton,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box style={{ position: "relative" }}>
      <Button
        sx={{ position: "absolute", right: 10, top: 10 }}
        onClick={handleOpen}
      >
        Login/Sign in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {isLoginForm ? (
            <LoginForm
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
            />
          ) : (
            <SignInForm
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
            />
          )}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            color="warning"
            variant="contained"
            onClick={handleToggleForm}
          >
            {isLoginForm ? "Sign in" : "Login"}
          </Button>
          <Button color="error" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

function LoginForm({ showPassword, handleClickShowPassword }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
      // Здесь вы можете выполнить дополнительные действия при отправке формы входа
    };
  
    return (
      <Box>
        <FormControl>
          <TextField
            label="Login"
            {...register("login", { required: true })}
            fullWidth
            margin="normal"
            error={errors.login ? true : false}
            helperText={errors.login ? "Login is required" : ""}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            {...register("password", { required: true })}
            fullWidth
            margin="normal"
            error={errors.password ? true : false}
            helperText={errors.password ? "Password is required" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSubmit(onSubmit)}
              sx={{ margin: "auto" }}
            >
              Login
            </Button>
          </Box>
        </FormControl>
      </Box>
    );
  }

  function SignInForm({ showPassword, handleClickShowPassword }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [repeatPasswordError, setRepeatPasswordError] = useState(false);
  
    const validatePassword = (value) => {
      return (
        value.length >= 8 &&
        /[A-Z]/.test(value) &&
        /[!@#$%^&*(),.?":{}|<>]/.test(value) &&
        /[0-9]/.test(value)
      );
    };
  
    const onSubmit = (data) => {
      if (data.password !== data.repeatPassword) {
        setRepeatPasswordError(true);
        return;
      }
      setRepeatPasswordError(false);
      console.log(data);
    };
  
    return (
      <Box>
        <FormControl>
          <TextField
            label="Email"
            {...register("email", { required: true })}
            fullWidth
            margin="normal"
            error={errors.email ? true : false}
            helperText={errors.email ? "Email is required" : ""}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Password"
            {...register("password", { 
              required: true,
              validate: validatePassword // Валидация пароля с помощью функции validatePassword
            })}
            fullWidth
            margin="normal"
            error={errors.password ? true : false}
            helperText={errors.password ? "Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one digit" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Repeat Password"
            {...register("repeatPassword", { required: true })}
            fullWidth
            margin="normal"
            error={repeatPasswordError || (errors.repeatPassword ? true : false)}
            helperText={repeatPasswordError ? "Passwords do not match" : (errors.repeatPassword ? "Repeat password is required" : "")}
          />
          <Box color="info" sx={{ display: "flex" }}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ margin: "auto" }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign in
            </Button>
          </Box>
        </FormControl>
      </Box>
    );
  }
