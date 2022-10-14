import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      title: "리액트 공부하기",
      body: "해도해도 끝이 없다...",
      isDone: false,
    },
    {
      id: 2,
      title: "진짜로?!",
      body: "아닐껄?",
      isDone: true,
    },
  ],
};

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    inputText: (state, action) => {
      state.user.push(action.payload);
      state = { ...state, user: [...state.user] };
    },

    userRevise: (state, action) => {
      state.user.map((value, index, array) => {
        if (value.id === action.payload) {
          value.isDone = !value.isDone;
        }
      });
      state = { ...state, user: [...state.user] };
    },

    deleteData: (state, action) => {
      const indexId = state.user.findIndex((user) => {
        if (user.id === action.payload) {
          return true;
        }
        return false;
      });
      state.user.splice(indexId, 1);
      state = { ...state, user: [...state.user] };
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { inputText, userRevise, deleteData } = todolistSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todolistSlice.reducer;
