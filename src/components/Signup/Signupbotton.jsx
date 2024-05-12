import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

function Signupbutton(props) {
  return (
    <ThemeProvider theme={theme}>
      <LoadingButton
        // loading={props.isSignIn}
        disabled={
          (props.isStudent &&
            (props.student.name === "" ||
              props.student.rollNo === "" ||
              props.student.iitkEmailId === "")) ||
          (props.isDoctor &&
            (props.doctor.name === "" ||
              props.doctor.designation === "" ||
              props.doctor.email === "" ||
              props.doctor.contactNo === "")) ||
          (props.isStaff &&
            (props.staff.name === "" ||
              props.staff.designation === "" ||
              props.staff.email === "" ||
              props.staff.contactNo === ""))
        }
        onClick={props.onClickSignUp}
        variant="contained"
        color="new"
      >
        {/* {props.buttonText} */}
        Sign Up
      </LoadingButton>
    </ThemeProvider>
  );
}

export default Signupbutton;
