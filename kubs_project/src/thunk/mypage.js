import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mypage = createAsyncThunk('myinfo/mypage', async () => {
  const result = await axios.get('/api/my_page');
  console.log('result: ', result);
  return result;
});

export default mypage;
