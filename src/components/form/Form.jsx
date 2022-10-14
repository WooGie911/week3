import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inputText } from "../../redux/modules/todolist";
import "./style.css";

const Form = () => {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  //id 0부터1사이 랜덤숫자로 받기위해 변수 생성
  const getRandom = () => Math.random();
  const inputId = getRandom();

  const [input, setInput] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandlerInput = (e) => {
    const { name, value } = e.target;
    // setInput(e.target.value);
    setInput({ ...input, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (input.title.trim() === "" || input.body.trim() === "")
      return alert("제목과 내용을 모두 입력 하세요");
    const insertID = { ...input, id: inputId };
    dispatch(inputText(insertID));
    setInput(initialState);
  };

  return (
    <div className="add-form">
      <div className="input-group">
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
      <button className="add-button" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
