import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postValidation = createAsyncThunk('register/POST_VALIDATION', async (data) => {
  console.log(data);
  const result = await axios.post('/api/email/validation', data, {
    headers: { 'Content-Type': 'application/json' },
  });

  console.log('result: ', result);

  return result;
});
