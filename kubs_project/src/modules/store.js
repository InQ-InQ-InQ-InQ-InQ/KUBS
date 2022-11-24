import { configureStore } from "@reduxjs/toolkit";
import { registerSlice, loginSlice, findPWSlice } from "./userSlice";

export default configureStore({
  reducer: {
    user: registerSlice.reducer,
    login: loginSlice.reducer,
    findPW: findPWSlice.reducer,
  },
});
