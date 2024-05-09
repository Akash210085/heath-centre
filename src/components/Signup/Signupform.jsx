import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
function Signupform() {
  const [value, setValue] = useState("");
  const [student, SetStudent] = useState(true);
  const [doctor, SetDoctor] = useState(false);
  const [staff, SetStaff] = useState(false);

  const handleChange = (event, newValue) => {
    console.log(event.target);
    setValue(newValue);
  };
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
      >
        <Tab
          label="Students"
          onClick={() => {
            SetStudent(true);
            SetDoctor(false);
            SetStaff(false);
          }}
        />

        <Tab
          label="Doctors"
          onClick={() => {
            SetDoctor(true);
            SetStaff(false);
            SetStudent(false);
          }}
        />
        <Tab
          label="Staff"
          onClick={() => {
            SetStaff(true);
            SetDoctor(false);
            SetStudent(false);
          }}
        />
      </Tabs>
      <div className="signupform">
        <Stack spacing={3} sx={{ width: 300 }} className="customClass">
          <TextField label="Name" variant="outlined"></TextField>
          {student && (
            <TextField label="Roll No" variant="outlined"></TextField>
          )}
          {student && (
            <TextField label="IITK Email ID" variant="outlined"></TextField>
          )}
          {(staff || doctor) && (
            <TextField label="Designation" variant="outlined"></TextField>
          )}
          {(staff || doctor) && (
            <TextField label="Email ID" variant="outlined"></TextField>
          )}
          {(staff || doctor) && (
            <TextField label="Contact No" variant="outlined"></TextField>
          )}
        </Stack>
      </div>
    </div>
  );
}
export default Signupform;
