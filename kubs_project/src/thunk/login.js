import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login/LOG_IN", async (data) => {
  console.log(data);
  const result = await axios.post(
    "/api/login",
    JSON.stringify({
      studentId: data.username,
      password: data.password,
    }),
    {
      headers: { "Content-Type": `application/json` },
    }
  );

  if (result.data.success) localStorage.setItem("authorized", true);
  console.log("result: ", result);

  return result;
});
