import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("user/LOG_IN", async (data) => {
  console.log(data);
  const result = await axios.post(
    "http://localhost:8080/api/login",
    {
      studentId: data.username,
      password: data.password,
    },
    {
      headers: { "content-type": "multipart/form-data" },
    }
  );

  console.log("result: ", result);

  return result;
});
