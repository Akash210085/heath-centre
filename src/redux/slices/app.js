import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  user: {},
  isLoggedIn: true,
  tab: 0, // [0, 1, 2, 3]
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
  shouldFetchProfile: true,
};
//   users: [], // all users of app who are not friends and not requested yet
//   all_users: [],
//   friends: [], // all friends
//   friendRequests: [], // all friend requests
//   chat_type: null,
//   room_id: null,
//   call_logs: [],
// };

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSnachbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },

    closeSnachbar(state, action) {
      state.snackbar.open = false;
      state.snackbar.message = null;
      state.snackbar.severity = null;
    },
    fetchUser(state, action) {
      state.user = action.payload.user;
      state.shouldFetchProfile = false;
    },
    setShouldFetchProfile(state, action) {
      state.shouldFetchProfile = action.payload;
    },
    updateUser(state, action) {
      state.user = action.payload.user;
    },
  },
});

export default slice.reducer;

export function SetShouldFetchProfile({ value }) {
  return (dispatch, getState) => {
    dispatch(slice.actions.setShouldFetchProfile({ value }));
  };
}

export function ShowSnackbar({ message, severity }) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.openSnachbar({ message, severity }));

    setTimeout(() => {
      dispatch(slice.actions.closeSnachbar());
    }, 4000);
  };
}

export function CloseSnackbar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.closeSnachbar());
  };
}

export function AddAppoinment(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/hc/dashboard",
        { ...formValues },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const FetchUserProfile = () => {
  return async (dispatch, getState) => {
    axios
      .get("/hc/get-me", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.fetchUser({ user: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
