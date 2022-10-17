import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData } from "../redux/modules/todolistSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PracList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todolist.user);
  // const x = useSelector((state) => state.todolist.comment);

  // console.log(x);
  useEffect(() => {
    // console.log("user", todoList);
    // console.log("comment", x);
  }, [todoList]);

  const onDeleteHanlder = (todoId) => {
    dispatch(deleteData(todoId));
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/Prac/");
        }}
      >
        홈 버튼
      </button>
      <div>PracList</div>

      <div className="list-wrapper">
        {todoList.map((todo1, index) => {
          // console.log(todo1);
          return (
            <div key={index} className="todo-container">
              <button
                onClick={() => {
                  navigate(`/Prac/Detail/${todo1.id}`);
                }}
              >
                상세 페이지
              </button>
              <div>
                <h2 className="todo-title">{todo1.writer}</h2>
                <div>{todo1.title}</div>
              </div>
              <div className="button-set">
                <button
                  className="todo-delete-button button"
                  onClick={() => onDeleteHanlder(todo1.id)}
                >
                  삭제하기
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          navigate("/Prac/Form");
        }}
      >
        입력 페이지로
      </button>
    </div>
  );
};

export default PracList;
