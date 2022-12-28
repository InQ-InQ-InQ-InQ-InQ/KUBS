import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const idValidation = createAsyncThunk('register/ID_VALIDATION', async (data) => {
  console.log(data);
  const result = await axios.get(`/api/id_check/${data.studentId}`);
  console.log('result: ', result);

  return result;
});

export default idValidation;
