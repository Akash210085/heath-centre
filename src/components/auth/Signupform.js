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

import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../../redux/slices/auth";
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

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // submit data to backend
      dispatch(
        RegisterUser({
          ...student,
          email: student.iitkEmail,
        })
      );
    } catch (error) {
      console.error(error);
    }
    // await axios
    //   .post(
    //     "http://localhost:3001/auth/register",
    //     {
    //       ...student,
    //       email: student.iitkEmail,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response.data.message);
    //     navigate("/auth/verify");
    //     props.setSeverity(response.data.status);
    //     props.setShowSnachbar(true);
    //     props.setSnachbarData(response.data.message);
    //   })
    //   .catch((err) => {
    //     console.log("hiiii");
    //     console.log(err);
    //     props.setSeverity(err.response.data.status);
    //     props.setShowSnachbar(true);
    //     props.setSnachbarData(err.response.data.message);
    //   });
  }

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
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Stack spacing={2} sx={{ width: 300 }} className="customClass">
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
            <ThemeProvider theme={theme}>
              <LoadingButton
                disabled={
                  student.name === "" ||
                  student.rollNo === "" ||
                  student.iitkEmail === "" ||
                  student.password === "" ||
                  error.name ||
                  error.rollNo ||
                  error.iitkEmail ||
                  error.password
                }
                onClick={handleSubmit}
                variant="contained"
                color="new"
                type="submit"
                loading={isLoading}
              >
                Sign Up
              </LoadingButton>
            </ThemeProvider>
          </Stack>
        </form>
      </div>
    </div>
  );
}
export default Signupform;
