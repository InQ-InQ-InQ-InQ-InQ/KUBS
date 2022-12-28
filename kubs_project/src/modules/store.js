import { configureStore } from '@reduxjs/toolkit';
import { loginSlice, findPWSlice, changePWSlice, logoutSlice } from './loginSlice';
import {
  registerSlice,
  idValidationSlice,
  getValidationSlice,
  postValidationSlice,
  departmentFindSlice,
} from './registerSlice';
import mypageSlice from './mypageSlice';

export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    logout: logoutSlice.reducer,
    register: registerSlice.reducer,
    idValidation: idValidationSlice.reducer,
    department: departmentFindSlice.reducer,
    getValidation: getValidationSlice.reducer,
    postValidation: postValidationSlice.reducer,
    findPW: findPWSlice.reducer,
    changePW: changePWSlice.reducer,
    mypage: mypageSlice.reducer,
  },
});
