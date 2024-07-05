import React from "react";
import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";
// import { ChatList } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import {
  AddFriend,
  getMyFriends,
  UpdateAllUserstoEmpty,
} from "../redux/slices/app";

const AddFriendDialog = ({ open, handleCloseDialog }) => {
  const [value, setValue] = React.useState(0);
  const all_users = useSelector((state) => state.app.all_users);
  const dispatch = useDispatch();
  const all_students = all_users.filter((user) => {
    return user.role === "student";
  });
  const all_doctos = all_users.filter((user) => {
    return user.role === "doctor";
  });

  let users;

  if (value === 0) {
    users = all_students;
  } else {
    users = all_doctos;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleStudentsClick() {}

  function handleDoctorsClick() {}
  function handleAddFriend(friend) {
    try {
      dispatch(AddFriend(friend._id));
      dispatch(getMyFriends());
    } catch (err) {
      console.log(err);
    }
    handleCloseDialog();
    try {
      dispatch(UpdateAllUserstoEmpty());
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Dialog
      maxWidth="xs"
      open={open}
      keepMounted
      onClose={handleCloseDialog}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle>
        <Stack spacing={2}>
          <Stack alignItems={"center"} justifyContent={"center"}>
            {"Add a new friend"}
          </Stack>

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
          >
            <Tab
              label="Students"
              onClick={handleStudentsClick}
              sx={{ width: 190 }}
              value={0}
            />
            <Tab
              label="Doctors"
              onClick={handleDoctorsClick}
              sx={{ width: 190 }}
              value={1}
            />
          </Tabs>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <MenuList>
          {users.map((user) => {
            return (
              <MenuItem
                onClick={() => {
                  handleAddFriend(user);
                }}
                sx={{ height: 50 }}
                key={user._id}
              >
                <Stack alignItems={"center"} direction={"row"} spacing={2}>
                  <Avatar alt={user.name} src={faker.image.avatar()} />
                  <Typography variant="subtitle2" fontSize={16}>
                    {user.name}
                  </Typography>
                </Stack>
              </MenuItem>
            );
          })}
        </MenuList>
      </DialogContent>
    </Dialog>
  );
};

export default AddFriendDialog;
