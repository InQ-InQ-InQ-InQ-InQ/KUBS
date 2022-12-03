import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const findPW = createAsyncThunk('login/FIND_PW', async (data) => {
  console.log(data);
  const result = await axios.post('/api/pw/find', data, {
    headers: { 'Content-Type': `application/json` },
  });

  console.log('result: ', result);

  return result;
});
