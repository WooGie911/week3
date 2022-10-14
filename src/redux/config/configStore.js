// src/redux/modules/config/configStore.js
import { configureStore } from "@reduxjs/toolkit";
import counter from "../modules/counterSlice";

import todolist from "../modules/todolistSlice";

// import todolist from "../modules/todolist";

const store = configureStore({
  reducer: { counter: counter, todolist: todolist },
});
console.log(store);

export default store;
