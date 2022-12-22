import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const mypage = createAsyncThunk('myinfo/mypage', async (data) => {
  console.log(data);
  const result = await axios.patch('/api/my_page', data);

  console.log('result: ', result);

  return result;
});

export default mypage;
