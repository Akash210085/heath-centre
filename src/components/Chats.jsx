import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { ChatList } from "../Data";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ChatConversation from "./ChatConversation";
import ChatElement from "./ChatElement";
function Chats() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} height={500}>
      <Box
        sx={{
          width: "60%",
          height: "90%",
          border: 1,
          borderColor: "cadetblue",
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Stack direction={"row"} sx={{ height: "100%", width: "100%" }}>
          <Box
            p={2}
            sx={{
              width: "25%",
              height: "100%",
              borderTopLeftRadius: 7.2,
              borderBottomLeftRadius: 7.2,
              backgroundColor: "#ecf0f1",
              borderRight: "1px solid rgba(189, 195, 199,1.0)",
            }}
          >
            <Stack spacing={2} sx={{ height: "100%" }}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="h6">Chats</Typography>
                <IconButton>
                  <AddCommentIcon />
                </IconButton>
              </Stack>
              <div className="search">
                <TextField
                  id="standard-basic"
                  variant="standard"
                  placeholder="Search..."
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 25,
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "cadetblue",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Stack direction={"column"} sx={{ flexGrow: 1, height: "79%" }}>
                <SimpleBar style={{ maxHeight: "100%" }}>
                  <Stack spacing={2}>
                    {ChatList.map((chat) => {
                      return <ChatElement {...chat} />;
                    })}
                  </Stack>
                </SimpleBar>
              </Stack>
            </Stack>
          </Box>
          <ChatConversation />
        </Stack>
      </Box>
    </Stack>
  );
}

export default Chats;
