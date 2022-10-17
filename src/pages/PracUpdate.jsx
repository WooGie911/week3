import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createData,
  deleteData,
  updateData,
} from "../redux/modules/todolistSlice";
import { useActionData, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PracUpdate = () => {
  const paramID = useParams();
  const navigate = useNavigate();

  const todoList = useSelector((state) => state.todolist.user);

  useEffect(() => {}, [todoList]);
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

  const [input, setInput] = useState(todoList[indexId]);

  const dispatch = useDispatch();
  const inputId = paramID;

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    // console.log(input);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      input.writer.trim() === "" ||
      input.title.trim() === "" ||
      input.body.trim() === ""
    )
      return alert("모두 입력 해주세요");
    const insertID = { ...input, id: inputId };
    dispatch(createData(insertID));
    setInput(todoList[indexId]);
  };

  const onUpdateHandler = (e) => {
    e.preventDefault();
    const insertID = { ...input, id: paramID.id };
    dispatch(updateData(insertID));
  };

  // const onUpdateHandler = (Id) => {
  //   dispatch(deleteData(Id));
  //   const insertID = { ...input, id: Id };
  //   dispatch(createData(insertID));
  //   setInput(todoList[indexId]);
  // };

  const onResetHandler = (e) => {
    e.preventDefault();
    setInput(initialState);
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
      <div>PracUpdate</div>

      <div className="list-container">
        <h2>작성자 : {todoList[indexId].writer}</h2>

        <div className="list-wrapper"></div>
        <div className="button-set">
          <h2> {todoList[indexId].title} </h2>
        </div>
        <div> {todoList[indexId].body} </div>
      </div>

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
          <label className="input-Text">제목</label>
          <input
            type="text"
            name="title"
            className="input"
            value={input.title || ""}
            onChange={onChangeHandlerInput}
          ></input>
          <label className="input-Text">내용</label>
          <input
            type="text"
            name="body"
            value={input.body || ""}
            className="input"
            onChange={onChangeHandlerInput}
          ></input>
        </div>
        <button className="add-button" onClick={onUpdateHandler}>
          수정하기
        </button>
        <button className="add-button" onClick={onResetHandler}>
          Reset
        </button>
      </div>

      <button
        onClick={() => {
          navigate("/Prac/List");
        }}
      >
        리스트 페이지로
      </button>
    </div>
  );
};

export default PracUpdate;
