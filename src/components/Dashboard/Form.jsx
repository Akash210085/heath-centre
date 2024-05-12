import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Allappoinment = [
  { label: "general consultation" },
  { label: "specific health concern" },
];

const Allcategory = [
  { id: 0, label: "OBGY" },
  { id: 1, label: "Paediatric" },
  { id: 2, label: "Skin OPD" },
  { id: 3, label: "Psychiatric" },
  { id: 4, label: "Orthopaedic" },
  { id: 5, label: "Ophthalmology" },
  { id: 6, label: "Medicine" },
  { id: 7, label: "ENT" },
  { id: 8, label: "Homeopathy" },
  { id: 9, label: "Dental OPD" },
  { id: 10, label: "Vaccination (Paediatrician)" },
];

const Alldoctors = [
  [{ id: 0, label: "Dr. Shubha Agarwal" }],
  [
    { id: 1, label: "Dr. K.K. Dokania" },
    { id: 2, label: "Dr. Vivek Saxena" },
  ],
  [{ id: 3, label: "Dr. Gopal Singh Dhanik" }],
  [{ id: 4, label: "Dr. Alok Bajpai" }],
  [
    { id: 5, label: "Dr. Nadeem Faruqui" },
    { id: 6, label: "Dr. Sanjai Rastogi" },
  ],
  [
    { id: 7, label: "Dr. Ashish Agrawal" },
    { id: 8, label: "Dr. Shekhar Rastogi" },
  ],
  [{ id: 9, label: "Dr. Rakesh Chandra" }],
  [{ id: 10, label: "Dr. Rajan Bhargava" }],
  [{ id: 11, label: "Dr. S. K. Mishra" }],
  [{ id: 12, label: "Madhuraj Hospital Pvt Ltd (MHPL)" }],
  [{ id: 13, label: "Dr. Gaurav Arya" }],
];

const Allslots = [
  [{ label: "Tuesday 04:30 pm to 06:00 pm" }],
  [{ label: "Tuesday 05:00 pm to 06:00 pm" }],
  [{ label: "Thursday 05:30 pm to 06:30 pm" }],
  [{ label: "Wednesday 05:30 pm to 06.30 pm" }],
  [{ label: "Thursday 11:00 am to 01:00 pm" }],
  [{ label: "Thursday 01:00 pm to 02:00 pm" }],
  [{ label: "Saturday 09:30 am to 10:30 am" }],
  [{ label: "Thursday 05:00 pm to 06:00 pm" }],
  [{ label: "Saturday 10:00 am to 11.00 am" }],
  [{ label: "Saturday 10:00 am to 11.00 am" }],
  [{ label: "Saturday 03:00 pm to 04:00 pm" }],

  [
    { label: "Monday 09:00 am to 12:00 noon" },
    { label: "Tuesday 09:00 am to 12:00 noon" },
    { label: "Wednesday 09:00 am to 12:00 noon" },
    { label: "Thursday 09:00 am to 12:00 noon" },
    { label: "Friday 09:00 am to 12:00 noon" },
    { label: "Saturday 09:00 am to 12:00 noon" },
  ],
  [
    { label: "Tuesday 11:00 am to 03:00 pm" },
    { label: "Wednesday 11:00 am to 03:00 pm" },
    { label: "Thursday 11:00 am to 03:00 pm" },
    { label: "Friday 11:00 am to 03:00 pm" },
    { label: "Saturday 11:00 am to 03:00 pm" },
  ],
  [
    { label: "Second Wednesday 11:00 am to 12:30 pm" },
    { label: "Fourth Wednesday 11:00 am to 12:30 pm" },
  ],
];

function Form(props) {
  const [doctors, SetDoctors] = useState([]);
  const [slots, SetSlots] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <form className="create-note">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              {isExpanded && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={Allappoinment}
                  sx={{ width: 300 }}
                  onChange={(event, value) => {
                    const newValue = value.label;
                    props.SetAppointment((preValue) => {
                      return {
                        ...preValue,
                        appointmentType: newValue,
                      };
                    });
                    // console.log(props.appointment);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Appoinment Type"
                    />
                  )}
                />
              )}
            </Grid>
            <Grid item xs={6}>
              {isExpanded && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={Allcategory}
                  sx={{ width: 300 }}
                  onChange={(event, value) => {
                    const newValue = value.label;
                    SetDoctors(Alldoctors[value.id]);
                    props.SetAppointment((preValue) => {
                      return {
                        ...preValue,
                        category: newValue,
                      };
                    });
                    console.log(props.appointment);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Category"
                    />
                  )}
                />
              )}
            </Grid>
            {isExpanded && (
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={doctors}
                  sx={{ width: 300 }}
                  onChange={(event, value) => {
                    const newValue = value.label;
                    SetSlots(Allslots[value.id]);
                    props.SetAppointment((preValue) => {
                      return {
                        ...preValue,
                        doctorName: newValue,
                      };
                    });
                    console.log(props.appointment);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Doctor's Name"
                    />
                  )}
                />
              </Grid>
            )}

            {isExpanded && (
              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={slots}
                  sx={{ width: 300 }}
                  onChange={(event, value) => {
                    const newValue = value.label;
                    props.SetAppointment((preValue) => {
                      return {
                        ...preValue,
                        preferredSlot: newValue,
                      };
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Preferred Slot"
                    />
                  )}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                fullWidth
                onClick={() => {
                  setIsExpanded(true);
                }}
                onChange={(event) => {
                  const newValue = event.target.value;
                  props.SetAppointment((preValue) => {
                    return {
                      ...preValue,
                      reasonForAppointment: newValue,
                    };
                  });
                }}
                id="standard-basic"
                label={
                  isExpanded
                    ? "Reason for Appointment"
                    : "Lodge A New Appointment..."
                }
                variant="standard"
              />
            </Grid>
          </Grid>
        </Box>

        <Zoom in={isExpanded}>
          <Fab onClick={props.handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Form;
