import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const department = createAsyncThunk(
  "user/FIND_DEPARTMENT",
  async (data) => {
    console.log(data);
    const result = await axios.post("/api/find", {
      keyword: data.keyword,
    });

    console.log("result: ", result);

    return result;
  }
);
