import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

//slices
import appReducer from "./slices/app";
import autReducer from "./slices/auth";
const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //   whitelist: [],
  //   blacklist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: autReducer,
});

export { rootPersistConfig, rootReducer };
