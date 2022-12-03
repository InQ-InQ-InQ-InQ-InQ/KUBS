import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("register/SIGN_UP", async (data) => {
  console.log(data);
  const result = await axios.post(
    "/api/member",
    JSON.stringify({
      name: data.name,
      studentId: data.studentId,
      password: data.password,
      email: data.email,
      phoneNumber: data.phoneNumber,
      departmentId: data.department,
    }),
    {
      headers: { "Content-Type": `application/json` },
    }
  );
  console.log("result: ", result);

  return result;
});
