import { configureStore } from "@reduxjs/toolkit";
import {
  registerSlice,
  loginSlice,
  departmentFindSlice,
  findPWSlice,
} from "./userSlice";

export default configureStore({
  reducer: {
    user: registerSlice.reducer,
    login: loginSlice.reducer,
    department: departmentFindSlice.reducer,
    findPW: findPWSlice.reducer,
  },
});
