import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/layout/Layout";

const DetailPage = () => {
  const paramID = useParams();
  const navigate = useNavigate();
  const todoList = useSelector((state) => state.todolist.user);
  const indexId = todoList.findIndex((user) => {
    if (user.id == paramID.id) {
      return true;
    }
    return false;
  });

  return (
    <Layout>
      <div className="list-container">
        <div className="Header">
          <h2>ID : {paramID.id}</h2>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
        </div>
        <div className="list-wrapper"></div>
        <div className="button-set">
          <h2> {todoList[indexId].title} </h2>
        </div>
        <div> {todoList[indexId].body} </div>
      </div>
    </Layout>
  );
};
export default DetailPage;
