import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const plusNUMThreeScond = createAsyncThunk(
  // 첫번째 인자 : action value
  "addNumber",
  // 두번째 인자 : 콜백함수
  (payload, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(plusNUM(payload));
    }, 3000);
  }
);

const initialState = {
  number: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusNUM: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNUM: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { plusNUM, minusNUM } = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;
