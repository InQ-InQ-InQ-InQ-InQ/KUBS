import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk('user/LOG_IN', async (data, thunkAPI) => {
    console.log(data);
    const result = await axios.post("http://localhost:8080/api/login", {
        username: data.username,
        password: data.password,
    })
    
    // .then(function(response) {
    //     console.log("response : ", response);
    //     return response.data;
    // });

    console.log("result: ", result);
    
    return result;
});