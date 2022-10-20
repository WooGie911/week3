// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

// 완성된 Thunk 함수
export const __getTodos = createAsyncThunk(
  "todos/getTodos", //타입?
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//여기부터 Thunk

// export const __getComment = createAsyncThunk(
//     "GET_COMMENT",
//     async (arg, thunkAPI) => {
//       try {
//         const { data } = await axios.get(`${serverUrl}/comments/${arg}`);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e);
//       }
//     }
//   );
//   export const __getCommentsThunk = createAsyncThunk(
//     "GET_COMMENTS",
//     async (_, thunkAPI) => {
//       try {
//         const { data } = await axios.get(`${serverUrl}/comments`);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.code);
//       }
//     }
//   );

//   export const __deleteComment = createAsyncThunk(
//     "DELETE_COMMENT",
//     async (arg, thunkAPI) => {
//       try {
//         await axios.delete(`${serverUrl}/comments/${arg}`);
//         return thunkAPI.fulfillWithValue(arg);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.code);
//       }
//     }
//   );

//   export const __addComment = createAsyncThunk(
//     "ADD_COMMENT",
//     async (arg, thunkAPI) => {
//       try {
//         const { data } = await axios.post(`${serverUrl}/comments`, arg);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e);
//       }
//     }
//   );

//   export const todoSlice = createSlice({
//     name: "todos",
//     initialState,
//     reducers: {
//       clearTodo: (state) => {
//         state.todo = {
//           id: 0,
//           body: "",
//           username: "",
//           title: "",
//         };
//       },
//     },
//     extraReducers: {
//       [__getTodoThunk.fulfilled]: (state, action) => {
//         state.isLoading = false;
//         state.todo = action.payload;
//       },
//       [__getTodoThunk.rejected]: (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       },
//       [__getTodoThunk.pending]: (state) => {
//         state.isLoading = true;
//       },
//       [__updateTodoThunk.fulfilled]: (state, action) => {
//         state.isLoading = false;
//         state.todo = action.payload;
//       },
//       [__updateTodoThunk.pending]: (state) => {
//         state.isLoading = true;
//       },
//       [__updateTodoThunk.rejected]: (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       },
//     },
//   });

//   export const { clearTodo } = todoSlice.actions;
//   export default todoSlice.reducer;

//여기까지 Thunk

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
