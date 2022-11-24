import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const findPW = createAsyncThunk("user/FIND_PW", async (data) => {
  console.log(data);
  const result = await axios.post("http://localhost:8080/api/find", {
    pwFindId: data.pwFindId,
    pwFindEmail: data.pwFindEmail,
  });

  console.log("result: ", result);

  return result;
});
