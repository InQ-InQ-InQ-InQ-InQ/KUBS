import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("user/SIGN_UP", async (data) => {
  console.log(data);
  const result = await axios.post("/api/members", {
    name: data.name,
    studentId: data.studentId,
    password: data.password,
    email: data.email,
    department: data.department,
    phoneNumber: data.phoneNumber,
  });

  console.log("result: ", result);

  return result;
});
