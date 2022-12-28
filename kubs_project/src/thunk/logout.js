import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const logout = createAsyncThunk('user/logout', async () => {
  const result = await axios.post('/api/logout');
  console.log('result: ', result);

  return result;
});

export default logout;
