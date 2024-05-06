import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Lodge(props) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField onChange={props.onChange} onClick={props.onClick} fullWidth id="standard-basic" label="Lodge A New Appointment..." variant="standard" />
          </Grid>
        </Grid>
      </Box>
    );
  }