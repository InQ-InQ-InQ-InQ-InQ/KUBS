import { createSlice } from '@reduxjs/toolkit';
import register from '../thunk/register';
import department from '../thunk/department';
import getValidation from '../thunk/getValidation';
import postValidation from '../thunk/postValidation';

const registerSlice = createSlice({
  name: 'user',
  initialState: {
    isRegistered: false,
    isRegistering: false,
    RegisterUser: null,
    RegisterRejectReason: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRegistered = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isRegistered = true;
        state.isRegistering = true;
        state.RegisterUser = action.payload.config.data;
        state.RegisterRejectReason = '';
      })
      .addCase(register.rejected, (state, action) => {
        state.isRegistering = false;
        state.RegisterRejectReason = action.error;
      });
  },
});

const departmentFindSlice = createSlice({
  name: 'department',
  initialState: {
    isDepartmentFinded: false,
    isDepartmentFinding: false,
    FindDepartmentInfo: null,
    FindDepartmentRejectReason: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(department.pending, (state) => {
        state.isDepartmentFinded = true;
      })
      .addCase(department.fulfilled, (state, action) => {
        state.isDepartmentFinded = true;
        state.isDepartmentFinding = true;
        state.FindDepartmentInfo = action.payload.config.data;
        state.FindDepartmentRejectReason = '';
      })
      .addCase(department.rejected, (state, action) => {
        state.isDepartmentFinding = false;
        state.FindDepartmentRejectReason = action.error;
      });
  },
});

const getValidationSlice = createSlice({
  name: 'getValidation',
  initialState: {
    isGetValidationStarted: false,
    isGetValidationStarting: false,
    GetValidationInfo: null,
    GetValidationRejectReason: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getValidation.pending, (state) => {
        state.isGetValidationStarted = true;
      })
      .addCase(getValidation.fulfilled, (state, action) => {
        state.isGetValidationStarted = true;
        state.isGetValidationStarting = true;
        state.GetValidationInfo = action.payload.config.data;
        state.GetValidationRejectReason = '';
      })
      .addCase(getValidation.rejected, (state, action) => {
        state.isGetValidationStarting = false;
        state.GetValidationRejectReason = action.error;
      });
  },
});

const postValidationSlice = createSlice({
  name: 'postValidation',
  initialState: {
    isPostValidationStarted: false,
    isPostValidationStarting: false,
    PostValidationInfo: null,
    PostValidationRejectReason: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postValidation.pending, (state) => {
        state.isPostValidationStarted = true;
      })
      .addCase(postValidation.fulfilled, (state, action) => {
        state.isPostValidationStarted = true;
        state.isPostValidationStarting = true;
        state.PostValidationInfo = action.payload.config.data;
        state.PostValidationRejectReason = '';
      })
      .addCase(postValidation.rejected, (state, action) => {
        state.isPostValidationStarting = false;
        state.PostValidationRejectReason = action.error;
      });
  },
});

export { registerSlice, departmentFindSlice, getValidationSlice, postValidationSlice };
