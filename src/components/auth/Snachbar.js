import React from "react";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbars(props) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.setShowSnachbar(false);
  };

  // console.log(props.severity);

  return (
    <div>
      <Snackbar
        open={props.showSnachbar}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={props.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {props.snachbarData}
        </Alert>
      </Snackbar>
    </div>
  );
}
