import React, { useState } from "react";
import { Box, Stack, IconButton, Fab, Tooltip, TextField } from "@mui/material";
import {
  Smiley,
  LinkSimple,
  PaperPlaneRight,
  Image,
  Sticker,
  Camera,
  File,
  User,
} from "@phosphor-icons/react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 50,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 100,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 150,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 200,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 250,
    title: "Contact",
  },
];
const ChatInput = (props) => {
  const [openAction, SetOpenAction] = useState(false);
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ height: "100%", width: "100%" }}
    >
      <IconButton
        onClick={() => {
          props.SetOpenPicker((preValue) => !preValue);
        }}
      >
        <Smiley />
      </IconButton>
      <Stack sx={{ width: "max-content" }}>
        <Stack
          sx={{ position: "relative", display: openAction ? "inline" : "none" }}
        >
          {Actions.map((el) => {
            return (
              <Tooltip title={el.title} placement="right">
                <Fab
                  size="small"
                  sx={{
                    position: "absolute",
                    top: -el.y,
                    backgroundColor: el.color,
                  }}
                >
                  {el.icon}
                </Fab>
              </Tooltip>
            );
          })}
        </Stack>
        <IconButton
          onClick={() => {
            SetOpenAction((preValue) => !preValue);
          }}
        >
          <LinkSimple />
        </IconButton>
      </Stack>

      <TextField
        type="text"
        placeholder="Type a message"
        fullWidth
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
      />
      <IconButton>
        <PaperPlaneRight />
      </IconButton>
    </Stack>
  );
};
function ChatFooter() {
  const [openPicker, SetOpenPicker] = useState(false);
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
      <Stack>
        <Box
          display={openPicker ? "inline" : "none"}
          zIndex={10}
          position={"fixed"}
          bottom={150}
          left={350}
        >
          <Picker data={data} theme={"light"} onEmojiSelect={console.log} />
        </Box>
        <ChatInput SetOpenPicker={SetOpenPicker} />
      </Stack>
    </Box>
  );
}

export default ChatFooter;
