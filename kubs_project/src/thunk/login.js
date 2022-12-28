import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const login = createAsyncThunk('user/LOG_IN', async (data) => {
  console.log(data);
  const result = await axios.post('/api/login', data, {
    headers: { 'Content-Type': 'application/json' },
  });
  console.log('result: ', result);

  return result;
});

export default login;
