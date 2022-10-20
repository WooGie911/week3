// src/redux/modules/config/configStore.js
import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counterSlice";

import todolist from "../modules/todolistSlice";
import todos from "../modules/todosSlice";

const store = configureStore({
  reducer: { counter: counter, todolist: todolist, todos: todos },
});
console.log(store);

export default store;
