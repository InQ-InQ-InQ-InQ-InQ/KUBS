import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('register/SIGN_UP', async (data) => {
  console.log(data);
  const result = await axios.post('/api/member', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('result: ', result);

  return result;
});
