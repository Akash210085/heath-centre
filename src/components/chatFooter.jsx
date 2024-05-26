import React from "react";
import { Box, Stack, IconButton } from "@mui/material";
import { Smiley, LinkSimple, PaperPlaneRight } from "@phosphor-icons/react";
function ChatFooter() {
  return (
    <Box
      /* footer */
      sx={{
        height: "10%",
        width: "100%",
        borderBottomRightRadius: 7.2,
        backgroundColor: "#ecf0f1",
        borderTop: "1px solid rgba(189, 195, 199,1.0)",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ height: "100%", width: "100%" }}
      >
        <IconButton>
          <Smiley />
        </IconButton>
        <IconButton>
          <LinkSimple />
        </IconButton>
        <input type="text" placeholder="Type a message" className="text" />
        <IconButton>
          <PaperPlaneRight />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default ChatFooter;
