import { configureStore } from '@reduxjs/toolkit';
import { loginSlice, findPWSlice, changePWSlice } from './loginSlice';
import { registerSlice, departmentFindSlice, getValidationSlice, postValidationSlice } from './registerSlice';

export default configureStore({
  reducer: {
    login: loginSlice.reducer,
    register: registerSlice.reducer,
    department: departmentFindSlice.reducer,
    getValidation: getValidationSlice.reducer,
    postValidation: postValidationSlice.reducer,
    findPW: findPWSlice.reducer,
    changePW: changePWSlice.reducer,
  },
});
