import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  comment: [],
};

export const __CreateData = createAsyncThunk(
  "CreateData",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);

const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    createData: (state, action) => {
      state.user.push(action.payload);
      state.user = [...state.user];
    },

    createCommentData: (state, action) => {
      state.comment.push(action.payload);
      state.comment = [...state.comment];
    },

    userRevise: (state, action) => {
      state.user.map((value, index, array) => {
        if (value.id === action.payload) {
          value.isDone = !value.isDone;
        }
      });
      state.user = [...state.user];
    },

    deleteData: (state, action) => {
      const indexId = state.user.findIndex((user) => {
        if (user.id === action.payload) {
          return true;
        }
        return false;
      });

      state.user.splice(indexId, 1);
      state.user = [...state.user];
    },

    deleteCommentData: (state, action) => {
      const indexId = state.comment.findIndex((comment) => {
        if (comment.id === action.payload) {
          return true;
        }
        return false;
      });
      state.comment.splice(indexId, 1);
      state.comment = [...state.comment];
    },

    updateData: (state, action) => {
      const indexId = state.user.findIndex((user) => {
        if (user.id == action.payload.id) {
          return true;
        }
        return false;
      });
      state.user[indexId] = action.payload;

      state.user = [...state.user];
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const {
  createData,
  userRevise,
  deleteData,
  updateData,
  deleteCommentData,
  createCommentData,
} = todolistSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todolistSlice.reducer;
