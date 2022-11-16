import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const findId = createAsyncThunk(
  "user/FIND_ID",
  async (data, thunkAPI) => {
    console.log(data);
    const result = await axios.post("http://localhost:8080/api/find", {
      idFindEmail: data.idFindEmail,
    });

    console.log("result: ", result);

    return result;
  }
);
