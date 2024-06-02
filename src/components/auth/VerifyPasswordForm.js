import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Authbutton from "./Authbutton";
function VerifyPasswordForm() {
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

  function handleSubmit() {}
  return (
    <div className="signupform">
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
        <Authbutton
          buttonText={"Reset Password"}
          handleSubmit={handleSubmit}
          isDisabled={email === "" || otp === "" || emailError || otpError}
        />
      </Stack>
    </div>
  );
}

export default VerifyPasswordForm;
