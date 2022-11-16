import { configureStore } from "@reduxjs/toolkit";
import {
  registerSlice,
  loginSlice,
  findIdSlice,
  findPWSlice,
} from "./userSlice";

export default configureStore({
  reducer: {
    user: registerSlice.reducer,
    login: loginSlice.reducer,
    findId: findIdSlice.reducer,
    findPW: findPWSlice.reducer,
  },
});
