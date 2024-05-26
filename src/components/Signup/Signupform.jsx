import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Signupbutton from "./Signupbotton";
function Signupform(props) {
  const [value, setValue] = useState("one");
  const [isStudent, SetIsStudent] = useState(true);
  const [isDoctor, SetIsDosctor] = useState(false);
  const [isStaff, SetIsStaff] = useState(false);
  const [student, SetStudent] = useState({
    name: "",
    rollNo: "",
    iitkEmailId: "",
  });

  const [doctor, SetDoctor] = useState({
    name: "",
    designation: "",
    email: "",
    contactNo: "",
  });

  const [staff, SetStaff] = useState({
    name: "",
    designation: "",
    email: "",
    contactNo: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [studentError, SetStudentError] = useState({
    nameError: false,
    rollNoError: false,
    iitkEmailIdError: false,
  });

  const [doctorError, SetDoctorError] = useState({
    nameError: false,
    designationError: false,
    emailError: false,
    contactNoError: false,
  });

  const [staffError, SetStaffError] = useState({
    nameError: false,
    designationError: false,
    emailError: false,
    contactNoError: false,
  });
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab
            value="one"
            label="Students"
            onClick={() => {
              SetIsStudent(true);
              SetIsDosctor(false);
              SetIsStaff(false);
              SetDoctor({
                name: "",
                designation: "",
                email: "",
                contactNo: "",
              });
              SetStaff({
                name: "",
                designation: "",
                email: "",
                contactNo: "",
              });
            }}
          />
          <Tab
            value="two"
            label="Doctors"
            onClick={() => {
              SetIsStudent(false);
              SetIsDosctor(true);
              SetIsStaff(false);
              SetStaff({
                name: "",
                designation: "",
                email: "",
                contactNo: "",
              });
              SetStudent({
                name: "",
                rollNo: "",
                iitkEmailId: "",
              });
            }}
          />
          <Tab
            value="three"
            label="Staff"
            onClick={() => {
              SetIsStudent(false);
              SetIsDosctor(false);
              SetIsStaff(true);
              SetDoctor({
                name: "",
                designation: "",
                email: "",
                contactNo: "",
              });
              SetStudent({
                name: "",
                rollNo: "",
                iitkEmailId: "",
              });
            }}
          />
        </Tabs>
      </Box>
      <div className="signupform">
        <Stack spacing={3} sx={{ width: 300 }} className="customClass">
          {isStudent && (
            <TextField
              label="Name"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStudent((preValue) => {
                  return {
                    ...preValue,
                    name: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isDoctor && (
            <TextField
              label="Name"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetDoctor((preValue) => {
                  return {
                    ...preValue,
                    name: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isStaff && (
            <TextField
              label="Name"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStaff((preValue) => {
                  return {
                    ...preValue,
                    name: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}

          {isStudent && (
            <TextField
              label="Roll No"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStudent((preValue) => {
                  return {
                    ...preValue,
                    rollNo: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isStudent && (
            <TextField
              label="IITK Email ID"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStudent((preValue) => {
                  return {
                    ...preValue,
                    iitkEmailId: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isDoctor && (
            <TextField
              label="Designation"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetDoctor((preValue) => {
                  return {
                    ...preValue,
                    designation: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isStaff && (
            <TextField
              label="Designation"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStaff((preValue) => {
                  return {
                    ...preValue,
                    designation: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isDoctor && (
            <TextField
              label="Email ID"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetDoctor((preValue) => {
                  return {
                    ...preValue,
                    email: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isStaff && (
            <TextField
              label="Email ID"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStaff((preValue) => {
                  return {
                    ...preValue,
                    email: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isDoctor && (
            <TextField
              label="Contact No"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetDoctor((preValue) => {
                  return {
                    ...preValue,
                    contactNo: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isStaff && (
            <TextField
              label="Contact No"
              variant="outlined"
              onChange={(event) => {
                const newValue = event.target.value;
                SetStaff((preValue) => {
                  return {
                    ...preValue,
                    contactNo: newValue,
                  };
                });
                console.log(student);
                console.log(doctor);
                console.log(staff);
              }}
            ></TextField>
          )}
          {isStudent && (
            <Signupbutton
              isDoctor={isDoctor}
              isStaff={isStaff}
              isStudent={isStudent}
              onClickSignUp={props.onClickSignUp}
              student={student}
              doctor={doctor}
              staff={staff}
            />
          )}
          {isDoctor && (
            <Signupbutton
              isDoctor={isDoctor}
              isStaff={isStaff}
              isStudent={isStudent}
              onClickSignUp={props.onClickSignUp}
              student={student}
              doctor={doctor}
              staff={staff}
            />
          )}
          {isStaff && (
            <Signupbutton
              isDoctor={isDoctor}
              isStaff={isStaff}
              isStudent={isStudent}
              onClickSignUp={props.onClickSignUp}
              student={student}
              doctor={doctor}
              staff={staff}
            />
          )}
        </Stack>
      </div>
    </div>
  );
}
export default Signupform;
