import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const department = createAsyncThunk("user/FIND_PW", async (data) => {
  console.log(data);
  const result = await axios.post("http://localhost:8080/api/find", {
    keyword: data.keyword,
  });

  console.log("result: ", result);

  return result;
});
