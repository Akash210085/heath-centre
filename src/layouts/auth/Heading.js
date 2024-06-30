import { Stack } from "@mui/material";
import React from "react";

function Heading() {
  return (
    <div className="heading">
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <h1>Health Appointment Centre</h1>
          <h2>Indian Institute of Technology, Kanpur</h2>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={4}>
          <a href="/auth/login">Sign In</a>
          <a href="/auth/register">Sign Up</a>
          <a href="/auth/credits">Credits</a>
        </Stack>
      </Stack>
    </div>
  );
}

export default Heading;
