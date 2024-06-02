import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
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
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [emailError, SetEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const isEmail = (email) => /^[A-Z0-9._%+-]+@iitk.ac.in$/i.test(email);
  const [showSnachbar, setShowSnachbar] = useState(false);
  const [snachbarData, setSnachbarData] = useState("");
  function onChangeEmail(event) {
    const newEmail = event.target.value;
    if (!isEmail(newEmail)) {
      SetEmailError(true);
      setEmailHelperText("Invalid IITK Email");
    } else {
      SetEmailError(false);
      setEmailHelperText("");
    }
    setEmail(newEmail);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/auth/forgot-password",
        {
          email: email,
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
        <Stack spacing={2} sx={{ width: 300 }}>
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

          <ThemeProvider theme={theme}>
            <LoadingButton
              disabled={email === "" || emailError}
              variant="contained"
              color="new"
              type="submit"
            >
              Send Reset Link
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

export default ForgotPasswordForm;
