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

  return (
    <div>
      <Snackbar
        open={props.showSnachbar}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {props.snachbarData}
        </Alert>
      </Snackbar>
    </div>
  );
}
