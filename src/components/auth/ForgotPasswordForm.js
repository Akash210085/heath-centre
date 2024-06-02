import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Authbutton from "./Authbutton";
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [emailError, SetEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
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
        <Authbutton
          buttonText={"Send Reset Link"}
          handleSubmit={handleSubmit}
          isDisabled={email === "" || emailError}
        />
      </Stack>
    </div>
  );
}

export default ForgotPasswordForm;
