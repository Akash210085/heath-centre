import React, { useState } from "react";
import {
  Box,
  Stack,
  Tabs,
  Tab,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Authbutton from "./Authbutton";

function Signupform(props) {
  const [value, setValue] = useState("one");
  const [showPassword, setShowPassword] = React.useState(false);
  const isEmail = (email) => /^[A-Z0-9._%+-]+@iitk.ac.in$/i.test(email);
  const isRoll = (rollNo) => /^[0-9]{5,}$/.test(rollNo);
  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/i.test(
      password
    );

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [error, setError] = useState({
    name: false,
    rollNo: false,
    iitkEmail: false,
    password: false,
  });
  const [helperText, setHelperText] = useState({
    name: "",
    rollNo: "",
    iitkEmail: "",
    password: "",
  });
  const [student, SetStudent] = useState({
    name: "",
    rollNo: "",
    iitkEmail: "",
    password: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function changeRollNo(event) {
    const newValue = event.target.value;
    if (!isRoll(newValue) || newValue.length < 5) {
      setError((preValue) => {
        return {
          ...preValue,
          rollNo: true,
        };
      });
      setHelperText((preValue) => {
        return {
          ...preValue,
          rollNo: "Invalid Roll No",
        };
      });
    } else {
      setError((preValue) => {
        return {
          ...preValue,
          rollNo: false,
        };
      });
      setHelperText((preValue) => {
        return {
          ...preValue,
          rollNo: "",
        };
      });
    }
    SetStudent((preValue) => {
      return {
        ...preValue,
        rollNo: newValue,
      };
    });
  }

  function changeEmail(event) {
    const newValue = event.target.value;
    if (!isEmail(newValue)) {
      setError((preValue) => {
        return {
          ...preValue,
          email: true,
        };
      });
      setHelperText((preValue) => {
        return {
          ...preValue,
          email: "Invalid IITK Email",
        };
      });
    } else {
      setError((preValue) => {
        return {
          ...preValue,
          email: false,
        };
      });
      setHelperText((preValue) => {
        return {
          ...preValue,
          email: "",
        };
      });
    }
    SetStudent((preValue) => {
      return {
        ...preValue,
        iitkEmail: newValue,
      };
    });
  }

  function changePassword(event) {
    const newPassword = event.target.value;

    if (!isValidPassword(newPassword)) {
      setError((preValue) => {
        return {
          ...preValue,
          password: true,
        };
      });
      setHelperText((preValue) => {
        return {
          ...preValue,
          password: `Password should be of minimum length of 8 characters,
               Password should be of maximum length of 20 characters,
               At least one uppercase letter,
               At least one lowercase letter,
               At least one digit,
               At least one special character.`,
        };
      });
    } else {
      setError((preValue) => {
        return {
          ...preValue,
          password: false,
        };
      });
      setHelperText((preValue) => {
        return {
          ...preValue,
          password: "",
        };
      });
    }
    SetStudent((preValue) => {
      return {
        ...preValue,
        password: newPassword,
      };
    });
  }

  function handleSubmit() {}

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Students" />
          <Tab value="two" label="Doctors" />
          <Tab value="three" label="Staff" />
        </Tabs>
      </Box>
      <div className="signupform">
        <Stack spacing={3} sx={{ width: 300 }} className="customClass">
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            value={student.name}
            onChange={(event) => {
              const newValue = event.target.value;
              SetStudent((preValue) => {
                return {
                  ...preValue,
                  name: newValue,
                };
              });
            }}
          ></TextField>

          <TextField
            name="rollNo"
            label="Roll No"
            variant="outlined"
            value={student.rollNo}
            error={error.rollNo}
            helperText={helperText.rollNo}
            onChange={changeRollNo}
          ></TextField>

          <TextField
            name="email"
            label="IITK Email ID"
            variant="outlined"
            value={student.email}
            error={error.email}
            helperText={helperText.email}
            onChange={changeEmail}
          ></TextField>
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            className="customClass"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={error.password}
            >
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              onChange={changePassword}
              value={student.password}
              error={error.password}
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
              {helperText.password}
            </FormHelperText>
          </FormControl>

          <Authbutton
            buttonText={"Sign Up"}
            handleSubmit={handleSubmit}
            isDisabled={
              student.name === "" ||
              student.rollNo === "" ||
              student.iitkEmail === "" ||
              student.password === "" ||
              error.name ||
              error.rollNo ||
              error.iitkEmail ||
              error.password
            }
          />
        </Stack>
      </div>
    </div>
  );
}
export default Signupform;
