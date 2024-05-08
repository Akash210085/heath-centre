import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Signbutton from "./Signbutton";

function Signform(props) {
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
  const isEmail = (email) => /^[A-Z0-9._%+-]+@iitk.ac.i$/i.test(email);

  function handleSubmit() {}

  function onChangeEmail(event) {
    SetEmail(event.target.value);

    if (!isEmail(email)) {
      SetEmailError(true);
      SetEmailHelperText("Invalid Email ID");
    } else {
      SetEmailError(false);
      SetEmailHelperText("");
    }
  }
  function onChangePassword(event) {
    SetPassword(event.target.value);
    if (!password || password.length < 5 || password.length > 20) {
      SetPasswordError(true);
      SetPasswordHelperText("Password should be of length between 5 and 20");
    } else {
      SetPasswordError(false);
      SetPasswordHelperText("");
    }
  }

  return (
    <div className="signform">
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
        <Signbutton
          onClickSignIn={props.onClickSignIn}
          isSignIn={props.isSignIn}
          isRegister={props.isRegister}
          onClickSignUp={props.onClickSignUp}
          buttonText={props.buttonText}
          handleSubmit={handleSubmit}
        />
        {props.isRegister && (
          <p>
            Don't have an account?
            <a onClick={props.onClickLink} href="#Sign up">
              Sign Up
            </a>
          </p>
        )}
      </Stack>
    </div>
  );
}

export default Signform;
