import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import Authbutton from "./Authbutton";
function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [confirmPasswordHelperText, setConfirmpasswordHelperText] =
    useState("");
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

  function handleSubmit() {}
  return (
    <div className="signupform">
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
        <Authbutton
          buttonText={"Reset Password"}
          handleSubmit={handleSubmit}
          isDisabled={
            password === "" ||
            confirmPassword === "" ||
            passwordError ||
            confirmPasswordError
          }
        />
      </Stack>
    </div>
  );
}

export default ResetPasswordForm;
