import { configureStore } from '@reduxjs/toolkit';
import { registerSlice, loginSlice } from './userSlice';

export default configureStore({
  reducer: {
    user: registerSlice.reducer,
    login: loginSlice.reducer,
  }
}) 