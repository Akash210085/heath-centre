import * as React from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import ComboBox from "./MuiDropdown";
import TextField from "@mui/material/TextField";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const appoinmentType = [
  { label: "general consultation" },
  { label: "specific health concern" },
];

const category = [
  { label: "OBGY" },
  { label: "Paediatric" },
  { label: "Skin OPD" },
  { label: "Psychiatric" },
  { label: "Orthopaedic" },
  { label: "Ophthalmology" },
  { label: "Paediatric" },
  { label: "Orthopaedic" },
  { label: "Medicine" },

  { label: "Ophthalmology" },
  { label: "ENT" },
  { label: "Homeopathy" },
  { label: "Dental OPD" },
  { label: "Vaccination (Paediatrician)" },
];

export default function BasicGrid(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {props.isExpanded && (
            <ComboBox placeholder="Appointment Type" options={appoinmentType} />
          )}
        </Grid>
        <Grid item xs={6}>
          {props.isExpanded && (
            <ComboBox placeholder="Category" options={category} />
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            onClick={props.onClick}
            onChange={props.onChange}
            id="standard-basic"
            label={
              props.isExpanded
                ? "Reason for Appointment"
                : "Lodge A New Appointment..."
            }
            variant="standard"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
