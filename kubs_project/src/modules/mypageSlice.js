import { createSlice } from '@reduxjs/toolkit';
import mypage from '../thunk/mypage';

const mypageSlice = createSlice({
  name: 'mypage',
  initialState: {
    isMypageRendered: false,
    isMypageRendering: false,
    MypageInfo: null,
    MypageRenderRejectReason: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(mypage.pending, (state) => {
        state.isMypageRendered = true;
      })
      .addCase(mypage.fulfilled, (state, action) => {
        state.isMypageRendered = true;
        state.isMypageRendering = true;
        state.MypageInfo = action.payload.config.data;
        state.MypageRenderRejectReason = '';
      })
      .addCase(mypage.rejected, (state, action) => {
        state.isMypageRegistering = false;
        state.MypageRenderRejectReason = action.error;
      });
  },
});

export default mypageSlice;
