import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

function VerifyPasswordForm(props) {
  const [email, setEmail] = useState("");
  const [emailError, SetEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [otpHelperText, setOtpHelperText] = useState("");
  const isEmail = (email) => /^[A-Z0-9._%+-]+@iitk.ac.in$/i.test(email);

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

  function onChangeOtp(event) {
    const newOpt = event.target.value;
    if (newOpt.length !== 6) {
      setOtpError(true);
      setOtpHelperText("OTP should be of length 6.");
    } else {
      setOtpError(false);
      setOtpHelperText("");
    }
    setOtp(newOpt);
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "https://hc-server-orcin.vercel.app/auth/verify",
        {
          email,
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/auth/login");
        props.setSeverity(response.data.status);
        props.setShowSnachbar(true);
        props.setSnachbarData(response.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
        props.setSeverity(err.response.data.status);
        props.setShowSnachbar(true);
        props.setSnachbarData(err.response.data.message);
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
          <TextField
            id="outlined-basic"
            label="OTP"
            variant="outlined"
            className="customClass"
            onChange={onChangeOtp}
            value={otp}
            error={otpError}
            helperText={otpHelperText}
            name="otp"
          />
          <ThemeProvider theme={theme}>
            <LoadingButton
              disabled={email === "" || otp === "" || emailError || otpError}
              variant="contained"
              color="new"
              type="submit"
            >
              Verify OTP
            </LoadingButton>
          </ThemeProvider>
        </Stack>
      </form>
    </div>
  );
}

export default VerifyPasswordForm;
