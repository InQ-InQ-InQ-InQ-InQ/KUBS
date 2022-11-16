import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk(
  "user/SIGN_UP",
  async (data, thunkAPI) => {
    console.log(data);
    const result = await axios.post("http://localhost:8080/api/members", {
      username: data.username,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
      email: data.email,
    });

    console.log("result: ", result);

    return result;
  }
);
