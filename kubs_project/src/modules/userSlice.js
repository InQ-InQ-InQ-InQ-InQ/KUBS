import { createSlice } from "@reduxjs/toolkit";
import { register } from "../thunk/register";
import { login } from "../thunk/login";

export const registerSlice = createSlice({
    name: "user",
    initialState: 
        {
           isRegistered: false,
           isRegistering: false,
           RegisterUser: null,
           RegisterRejectReason: "",
        }
    ,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state, action) => {
                state.isRegistered = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isRegistered = true;
                state.isRegistering = false;
                state.RegisterUser = action.payload.config.data;
                state.RegisterRejectReason = "";
            })
            .addCase(register.rejected, (state, action) => {
                state.isRegistering = false;
                state.RegisterRejectReason = action.error;
            })
    }
});

export const loginSlice = createSlice({
    name: "login",
    initialState: 
        {
           isLoginned: false,
           isLoginning: false,
           LoginUser: null,
           LoginRejectReason: "",
        }
    ,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoginned = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoginned = true;
                state.isLoginning = false;
                state.LoginUser = action.payload.config.data;
                state.LoginRejectReason = "";
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoginning = false;
                state.LoginRejectReason = action.error;
            })
    }
});