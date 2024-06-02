import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor("#F40B27"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
    new: createColor("#5f9eA0"),
  },
});

function SignInform() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [emailError, SetEmailError] = useState(false);
  const [passwordError, SetPasswordError] = useState(false);
  const [emailHelperText, SetEmailHelperText] = useState("");
  const [passwordHelperText, SetPasswordHelperText] = useState("");
  const isEmail = (email) => /^[A-Z0-9._%+-]+@iitk.ac.in$/i.test(email);

  function onChangeEmail(event) {
    const newEmail = event.target.value;
    SetEmail(newEmail);

    if (!isEmail(newEmail)) {
      SetEmailError(true);
      SetEmailHelperText("Invalid Email ID");
    } else {
      SetEmailError(false);
      SetEmailHelperText("");
    }
  }
  function onChangePassword(event) {
    const newPassword = event.target.value;
    SetPassword(newPassword);
    if (!newPassword || newPassword.length < 8 || newPassword.length > 20) {
      SetPasswordError(true);
      SetPasswordHelperText("Password should be of length between 8 and 20");
    } else {
      SetPasswordError(false);
      SetPasswordHelperText("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="signform">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack spacing={3} sx={{ width: 300 }}>
          <TextField
            id="outlined-basic"
            label="IITK Email ID"
            variant="outlined"
            className="customClass"
            onChange={onChangeEmail}
            value={email}
            error={emailError}
            helperText={emailHelperText}
            name="email"
          />
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className="customClass"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={passwordError}
            >
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              onChange={onChangePassword}
              value={password}
              error={passwordError}
              sx={{ width: 300 }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText id="outlined-weight-helper-text">
              {passwordHelperText}
            </FormHelperText>
          </FormControl>

          <ThemeProvider theme={theme}>
            <LoadingButton
              disabled={
                emailError || passwordError || email === "" || password === ""
              }
              onClick={handleSubmit}
              variant="contained"
              color="new"
              type="submit"
            >
              Sign In
            </LoadingButton>
          </ThemeProvider>
          <p>
            Don't have an account?
            <a href="/auth/register">Sign Up</a>
          </p>
        </Stack>
      </form>
    </div>
  );
}

export default SignInform;
