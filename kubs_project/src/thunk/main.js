import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const main = createAsyncThunk('main', async () => {
  // 'main' 부분에 뭐들어가야함?
  const result = await axios.get('/api/');
  console.log('result: ', result);
  return result;
});

export default main;
