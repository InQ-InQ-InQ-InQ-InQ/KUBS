import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const changePW = createAsyncThunk('login/CHANGE_PW', async (data) => {
  console.log(data);
  const result = await axios.patch('/api/pw/find', data, {
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('result: ', result);

  return result;
});
