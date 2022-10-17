import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteData,
  deleteCommentData,
  createCommentData,
} from "../redux/modules/todolistSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PracDetail = () => {
  const navigate = useNavigate();
  const paramID = useParams();
  const todoList = useSelector((state) => state.todolist.user);
  const commentList = useSelector((state) => state.todolist.comment);
  const indexId = todoList.findIndex((user) => {
    if (user.id == paramID.id) {
      return true;
    }
    return false;
  });

  const initialState = {
    id: 0,
    writer: "",
    title: "",
    body: "",
  };

  const getRandom = () => Math.random();
  const inputId = getRandom();

  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onCommentSubmitHandler = (e) => {
    e.preventDefault();
    if (input.writer.trim() === "" || input.comment.trim() === "")
      return alert("모두 입력 해주세요");
    const insertID = { ...input, id: inputId, userId: paramID.id };
    dispatch(createCommentData(insertID));
    setInput(initialState);
  };

  const onResetHandler = (e) => {
    e.preventDefault();
    setInput(initialState);
    console.log(commentList);
  };

  const onDeleteHanlder = (todoId) => {
    dispatch(deleteCommentData(todoId));
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
      <div>PracDetail</div>
      <div className="list-container">
        <h2>작성자 : {todoList[indexId].writer}</h2>

        <div className="list-wrapper"></div>
        <div className="button-set">
          <h2> {todoList[indexId].title} </h2>
        </div>
        <div> {todoList[indexId].body} </div>
      </div>
      <button
        onClick={() => {
          navigate(`/Prac/Update/${paramID.id}`);
        }}
      >
        수정하기
      </button>
      <button
        onClick={() => {
          navigate("/Prac/List");
        }}
      >
        리스트 페이지로
      </button>
      <div>Comment</div>
      <div className="add-form">
        <div className="input-group">
          <label className="input-Text">작성자</label>
          <input
            type="text"
            name="writer"
            className="input"
            value={input.writer || ""}
            onChange={onChangeHandlerInput}
          ></input>

          <label className="input-Text">내용</label>
          <input
            type="text"
            name="comment"
            value={input.comment || ""}
            className="input"
            onChange={onChangeHandlerInput}
          ></input>
        </div>
        <button className="add-button" onClick={onCommentSubmitHandler}>
          댓글 추가하기
        </button>
        <button className="add-button" onClick={onResetHandler}>
          Reset
        </button>
      </div>

      <div className="list-wrapper">
        {commentList.map((todo1, index) => {
          //   console.log(todo1);
          if (todo1.userId == paramID.id) {
            return (
              <div key={index} className="todo-container">
                <div>
                  <h2 className="todo-title">{todo1.writer}</h2>
                  <div>{todo1.comment}</div>
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
          }
        })}
      </div>
    </div>
  );
};

export default PracDetail;
