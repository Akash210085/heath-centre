import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Signupbutton from "./Signupbotton";
function Signupform() {
  const [value, setValue] = useState("");
  const [isstudent, SetIsStudent] = useState(true);
  const [isdoctor, SetIsDoctor] = useState(false);
  const [isstaff, SetIsStaff] = useState(false);
  const [name, SetName] = useState("");
  const [rollNo, SetRollNo] = useState("");
  const [iitkEmail, SetIITKEmail] = useState("");
  const [designation, SetDesignation] = useState("");
  const [email, SetEmail] = useState("");
  const [contact, SetContact] = useState("");
  const [nameError, SetNameError] = useState(false);
  const [rollNoError, SetRollNoError] = useState(false);
  const [iitkEmailError, SetIITKEmailError] = useState(false);
  const [designationError, SetDesignationError] = useState(false);
  const [emailError, SetEmailError] = useState(false);
  const [contactError, SetContactError] = useState(false);
  const isEmail = (email) => /^[A-Z0-9._%+-]+@iitk.ac.in$/i.test(email);
  //   const [isDisabled, SetIsDisabled] = useState(true);
  const [iitkEmailHelperText, SetIITKEmailHelperText] = useState("");

  const handleChange = (event, newValue) => {
    console.log(event.target);
    setValue(newValue);
  };

  function handleClickSignup() {
    name === "" ? SetNameError(true) : SetNameError(false);
    rollNo === "" ? SetRollNoError(true) : SetRollNoError(false);
    iitkEmail === "" ? SetEmailError(true) : SetEmailError(false);
    designation === "" ? SetDesignationError(true) : SetDesignationError(false);
    email === "" ? SetEmailError(true) : SetEmailError(false);
    contact === "" ? SetContactError(true) : SetContactError(false);
  }

  function onChangeIITKEmail(event) {
    const newEmail = event.target.value;
    SetIITKEmail(newEmail);

    if (!isEmail(newEmail)) {
      SetIITKEmailError(true);
      SetIITKEmailHelperText("Invalid Email ID");
    } else {
      SetIITKEmailError(false);
      SetIITKEmailHelperText("");
    }
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        className="signup-tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "cadetblue",
          },
        }}
        sx={{
          ".Mui-selected": {
            color: "#5f9ea0",
          },
        }}
      >
        <Tab
          label="Students"
          onClick={() => {
            SetIsStudent(true);
            SetIsDoctor(false);
            SetIsStaff(false);
          }}
        />

        <Tab
          label="Doctors"
          onClick={() => {
            SetIsDoctor(true);
            SetIsStaff(false);
            SetIsStudent(false);
          }}
        />
        <Tab
          label="Staff"
          onClick={() => {
            SetIsStaff(true);
            SetIsDoctor(false);
            SetIsStudent(false);
          }}
        />
      </Tabs>
      <div className="signupform">
        <Stack spacing={3} sx={{ width: 300 }} className="customClass">
          <TextField
            label="Name"
            variant="outlined"
            onChange={(event) => {
              SetName(event.target.value);
            }}
            error={nameError}
          ></TextField>
          {isstudent && (
            <TextField
              label="Roll No"
              variant="outlined"
              onChange={(event) => {
                SetRollNo(event.target.value);
              }}
              error={rollNoError}
            ></TextField>
          )}
          {isstudent && (
            <TextField
              label="IITK Email ID"
              variant="outlined"
              onChange={onChangeIITKEmail}
              error={iitkEmailError}
              helperText={iitkEmailHelperText}
            ></TextField>
          )}
          {(isstaff || isdoctor) && (
            <TextField
              label="Designation"
              variant="outlined"
              onChange={(event) => {
                SetDesignation(event.target.value);
              }}
              error={designationError}
            ></TextField>
          )}
          {(isstaff || isdoctor) && (
            <TextField
              label="Email ID"
              variant="outlined"
              onChange={(event) => {
                SetEmail(event.target.value);
              }}
              error={emailError}
            ></TextField>
          )}
          {(isstaff || isdoctor) && (
            <TextField
              label="Contact No"
              variant="outlined"
              onChange={(event) => {
                SetContact(event.target.value);
              }}
              error={contactError}
            ></TextField>
          )}
          <Signupbutton
            onClick={handleClickSignup}
            isDisabled={
              emailError || name === "" || rollNo === "" || iitkEmail === ""
            }
          ></Signupbutton>
        </Stack>
      </div>
    </div>
  );
}
export default Signupform;
