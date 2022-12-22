import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getValidation = createAsyncThunk('register/GET_VALIDATION', async (data) => {
  console.log(data);
  const result = await axios.get('/api/email/validation', {
    params: {
      key: data.validate,
    },
  });

  console.log('result: ', result);

  return result;
});

export default getValidation;
