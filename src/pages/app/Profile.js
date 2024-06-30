import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { Autocomplete, Fab, Stack, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LoadingButton from "@mui/lab/LoadingButton";
// import dayjs from "dayjs";
import DateRangeIcon from "@mui/icons-material/DateRange";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { AddSlot } from "../../redux/slices/app";
const Allcategory = [
  { id: 0, label: "OBGY" },
  { id: 1, label: "Paediatric" },
  { id: 2, label: "Skin OPD" },
  { id: 3, label: "Psychiatric" },
  { id: 4, label: "Orthopaedic" },
  { id: 5, label: "Ophthalmology" },
  { id: 6, label: "Medicine" },
  { id: 7, label: "ENT" },
  { id: 8, label: "Homeopathy" },
  { id: 9, label: "Dental OPD" },
  { id: 10, label: "Vaccination (Paediatrician)" },
];

const days = [
  { id: 0, label: "Monday" },
  { id: 1, label: "Tuesday" },
  { id: 2, label: "Wednesday" },
  { id: 3, label: "Thursday" },
  { id: 4, label: "Friday" },
  { id: 5, label: "Saturday" },
  { id: 6, label: "Sunday" },
];

function Item(props) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <DateRangeIcon />
        </Avatar>
      </ListItemAvatar>

      <ListItemText primary={props.slot} />
      {props.editProfile && (
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            console.log(props.id);
            props.setAllSlots((preValue) => {
              return preValue.filter((item, index) => {
                return props.id !== index;
              });
            });
          }}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </ListItem>
  );
}

function Profile() {
  // const [value, setValue] = React.useState(dayjs());
  const [slot, setSlot] = useState({
    day: "",
    from: "",
    to: "",
  });
  const [category, setCategory] = useState("");
  const [dayError, setDayError] = useState(false);
  const [dayHelperText, setDayHelperText] = useState("");

  const [allSlots, setAllSlots] = useState([]);

  const [editProfile, setEditProfile] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.app);

  function handleAdd() {
    if (slot.day === "") {
      setDayError(true);
      setDayHelperText("Day is Required");
      return;
    }
    let slotString = "";
    slotString += slot.day + " from " + slot.from + " to " + slot.to;
    console.log(slotString);
    setAllSlots((preValue) => {
      return [...preValue, slotString];
    });
    console.log(allSlots);
    setSlot((preValue) => {
      return {
        ...preValue,
        day: "",
      };
    });
  }

  function handleSave() {
    setEditProfile(false);
    try {
      dispatch(
        AddSlot({
          category,
          id: user._id,
          name: user.name,
          certified: true,
          slots: allSlots,
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="profile">
      <Paper elevation={3} className="profile-paper">
        <Stack spacing={4}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <h1>Profile</h1>
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Fab
                variant="extended"
                size="small"
                color="secondary"
                onClick={() => {
                  setEditProfile(true);
                }}
              >
                <EditIcon />
                Edit Profile
              </Fab>
              <Fab variant="extended" size="small" color="success">
                <TaskAltIcon />
                Verified
              </Fab>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              className="customClass"
              sx={{ width: 300 }}
              name="name"
              value={user.name}
              disabled
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className="customClass"
              sx={{ width: 300 }}
              name="email"
              value={user.email}
              disabled
            />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <TextField
              id="standard-basic"
              label="Contact No"
              variant="standard"
              className="customClass"
              sx={{ width: 300 }}
              name="contactNo"
              value={user.contactNo}
              disabled
            />
            <TextField
              id="standard-basic"
              label="Designation"
              variant="standard"
              className="customClass"
              sx={{ width: 300 }}
              name="designation"
              value={user.designation}
              disabled
            />
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={Allcategory}
              disabled={!editProfile}
              sx={{
                "& .MuiInput-underline:after": {
                  borderBottomColor: "cadetblue",
                },
                width: 300,
              }}
              onChange={(event, value) => {
                const newValue = value.label;
                setCategory(newValue);
              }}
              value={category}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Category"
                  name="category"
                />
              )}
            />
            <TextField
              id="standard-basic"
              label="Upload your Gov verified Certificate"
              variant="standard"
              className="customClass"
              sx={{ width: 300 }}
              name="certificate"
              disabled={!editProfile}
            />
          </Stack>

          <h1 style={{ paddingTop: "20px" }}>
            {editProfile
              ? "Pick your appoinment slots"
              : "Your appointments slots"}
          </h1>

          {editProfile && (
            <>
              {" "}
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker
                      label="from"
                      className="customClass"
                      sx={{ width: 300 }}
                      onChange={(newValue) => {
                        let hour = newValue.$H;
                        let minutes = newValue.$m;
                        let meredian = " am";
                        if (hour > 12) {
                          meredian = " pm";
                          hour %= 12;
                        }

                        if (Math.log10(hour) < 1) {
                          hour = "0" + hour;
                        }

                        if (Math.log10(minutes) < 1) {
                          minutes = "0" + minutes;
                        }
                        let time = "";
                        time += hour + ":" + minutes + meredian;
                        setSlot((preValue) => {
                          return {
                            ...preValue,
                            from: time,
                          };
                        });
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <TimePicker
                      label="to"
                      className="customClass"
                      sx={{ width: 300 }}
                      onChange={(newValue) => {
                        let hour = newValue.$H;
                        let minutes = newValue.$m;
                        let meredian = " am";
                        if (hour > 12) {
                          meredian = " pm";
                          hour %= 12;
                        }

                        if (Math.log10(hour) < 1) {
                          hour = "0" + hour;
                        }

                        if (Math.log10(minutes) < 1) {
                          minutes = "0" + minutes;
                        }
                        let time = "";
                        time += hour + ":" + minutes + meredian;
                        setSlot((preValue) => {
                          return {
                            ...preValue,
                            to: time,
                          };
                        });
                      }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={45}
                justifyContent={"center"}
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={days}
                  sx={{
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "cadetblue",
                    },
                    width: 300,
                  }}
                  onChange={(event, value) => {
                    const newValue = value.label;
                    if (newValue !== "") {
                      setDayError(false);
                      setDayHelperText("");
                    }
                    setSlot((preValue) => {
                      return {
                        ...preValue,
                        day: newValue,
                      };
                    });
                  }}
                  value={slot.day}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Day"
                      name="day"
                      value={slot.day}
                      error={dayError}
                      helperText={dayHelperText}
                    />
                  )}
                />
                <Fab onClick={handleAdd} color="secondary" size="medium">
                  <AddIcon />
                </Fab>
              </Stack>
            </>
          )}
          {allSlots.length === 0 && !editProfile ? (
            <h1 style={{ fontSize: "15px", fontWeight: "2px" }}>
              You haven't added your available slots. Please Edit the profile to
              add
            </h1>
          ) : (
            <List
              sx={{
                width: "100%",
                maxWidth: 800,
                bgcolor: "background.paper",
                paddingLeft: "100px",
              }}
            >
              {allSlots.map((slot, index) => {
                return (
                  <Item
                    key={index}
                    id={index}
                    slot={slot}
                    setAllSlots={setAllSlots}
                    editProfile={editProfile}
                  />
                );
              })}
            </List>
          )}
          {editProfile && (
            <LoadingButton
              loading={isLoading}
              variant="contained"
              color="success"
              onClick={handleSave}
            >
              Save
            </LoadingButton>
          )}
        </Stack>
      </Paper>
    </div>
  );
}

export default Profile;
