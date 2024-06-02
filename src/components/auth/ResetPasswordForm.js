import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomizedSnackbars from "./Snachbar";
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
function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [confirmPasswordHelperText, setConfirmpasswordHelperText] =
    useState("");
  const [showSnachbar, setShowSnachbar] = useState(false);
  const [snachbarData, setSnachbarData] = useState("");
  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/i.test(
      password
    );
  function onChangePassword(event) {
    const newPassword = event.target.value;
    if (!isValidPassword(newPassword)) {
      setPasswordError(true);
      setPasswordHelperText(`Password should be of minimum length of 8 characters,
               Password should be of maximum length of 20 characters,
               At least one uppercase letter,
               At least one lowercase letter,
               At least one digit,
               At least one special character.`);
    } else {
      setPasswordError(false);
      setPasswordHelperText("");
    }
    setPassword(newPassword);
  }

  function onChangeConfirmPassword(event) {
    const newConfirmPassword = event.target.value;
    if (password !== newConfirmPassword) {
      setConfirmPasswordError(true);
      setConfirmpasswordHelperText("Passwords do not match.");
    } else {
      setConfirmPasswordError(false);
      setConfirmpasswordHelperText("");
    }
    setConfirmPassword(newConfirmPassword);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/auth/reset-password",
        {
          password,
          confirmPassword,
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
        setShowSnachbar(true);
        setSnachbarData(err.response.data.message);
      });
  }

  return (
    <div className="signupform">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Stack spacing={3} sx={{ width: 300 }}>
          <TextField
            id="outlined-basic"
            label="New Password"
            variant="outlined"
            className="customClass"
            onChange={onChangePassword}
            value={password}
            error={passwordError}
            helperText={passwordHelperText}
            name="email"
          />
          <TextField
            id="outlined-basic"
            label="Confirm New Password"
            variant="outlined"
            className="customClass"
            onChange={onChangeConfirmPassword}
            value={confirmPassword}
            error={confirmPasswordError}
            helperText={confirmPasswordHelperText}
            name="email"
          />
          <ThemeProvider theme={theme}>
            <LoadingButton
              disabled={
                password === "" ||
                confirmPassword === "" ||
                passwordError ||
                confirmPasswordError
              }
              variant="contained"
              color="new"
              type="submit"
            >
              Reset Password
            </LoadingButton>
          </ThemeProvider>
          <CustomizedSnackbars
            snachbarData={snachbarData}
            showSnachbar={showSnachbar}
            setShowSnachbar={setShowSnachbar}
          />
        </Stack>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
