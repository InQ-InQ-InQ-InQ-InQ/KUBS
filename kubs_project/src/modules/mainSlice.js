import { createSlice } from '@reduxjs/toolkit';
import main from '../thunk/main';

// 초기 상태 정의
const initialState = {
  isMainRendered: false,
  isMainRendering: false,
  Main_: null,
  //모르겠음
  MainRenderRejectReason: '',
  // 상태값들
};

// slice 정의
const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    // 액션 타입 및 리듀서 함수 정의
  },
  extraReducers: (builder) => {
    builder
      .addCase(main.pending, (state) => {
        state.isMainRendered = true;
      })
      .addCase(main.fulfilled, (state, action) => {
        state.isMainRendered = true;
        state.isMainRendering = true;
        state.Main_ = action.payload.config.data;
        state.MainRenderRejectReason = '';
      })
      .addCase(main.rejected, (state, action) => {
        state.isMainRendering = false;
        state.MainRenderRejectReason = action.error;
      });
  },
});

export default mainSlice;

// 액션 생성자 함수 (Action Creator) 추출
// export const { actionCreator1, actionCreator2 } = sliceNameSlice.actions;

// 리듀서 함수
