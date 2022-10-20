// src/App.jsx

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "../redux/modules/todosSlice";
import { useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
  return <div>TODO</div>;
};

export default Todo;
