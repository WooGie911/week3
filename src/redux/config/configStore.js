// src/redux/modules/config/configStore.js

import { createStore } from "redux";
import { combineReducers } from "redux";

import counter from "../modules/counter";
import todolist from "../modules/todolist";

const rootReducer = combineReducers({
  counter: counter,
  todolist: todolist,
});
const store = createStore(rootReducer);
console.log(store);

export default store;
