import React, { useState } from "react";
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
// import { ChatList } from "../../Data";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import ChatConversation from "../../components/ChatConversation";
import ChatElement from "../../components/ChatElement";
import AddFriendDialog from "../../components/AddFriendDialog";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllUsers } from "../../redux/slices/app";
import Nochat from "../../assets/illestration/Nochat";
// import Img from "../../assets/images/Messages-pana.svg";
function Chats() {
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  const myFriendsData = useSelector((state) => state.app.friends);
  const { selected_id } = useSelector((state) => state.app);
  const handleOpenDialog = () => {
    try {
      dispatch(FetchAllUsers());
    } catch (err) {
      console.log(err);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
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
                  <IconButton
                    onClick={() => {
                      handleOpenDialog();
                    }}
                  >
                    <AddCommentIcon />
                  </IconButton>
                </Stack>
                <div className="search">
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    placeholder="Search..."
                    onChange={(event) => {
                      setSearch(event.target.value);
                    }}
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
                      {myFriendsData
                        .filter((friend) => {
                          return search.toLowerCase() === ""
                            ? friend
                            : friend.name
                                .toLowerCase()
                                .includes(search.toLowerCase());
                        })
                        .map((friend) => {
                          return (
                            <ChatElement
                              key={friend._id}
                              _id={friend._id}
                              status={friend.status}
                              name={friend.name}
                              socket_id={friend.socket_id}
                            />
                          );
                        })}
                    </Stack>
                  </SimpleBar>
                </Stack>
              </Stack>
            </Box>
            {selected_id !== null ? (
              <ChatConversation />
            ) : (
              <Stack
                sx={{
                  height: "100%",
                  width: "75%",
                  backgroundColor: "#ecf0f1",
                }}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Nochat />
                <Box sx={{ position: "relative", bottom: 150 }}>
                  <Typography variant="subtitle2">
                    Select a conversation or start a new one
                  </Typography>
                </Box>
              </Stack>
            )}
          </Stack>
        </Box>
      </Stack>
      {openDialog && (
        <AddFriendDialog
          open={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      )}
    </>
  );
}

export default Chats;
