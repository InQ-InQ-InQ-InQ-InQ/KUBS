import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const department = createAsyncThunk('register/FIND_DEPARTMENT', async (data) => {
  console.log(data);
  const result = await axios.get('/api/departments', {
    params: {
      search: data.keyword,
    },
  });

  console.log('result: ', result);

  return result;
});

export default department;
