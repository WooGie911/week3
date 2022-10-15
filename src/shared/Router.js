import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "../pages/Counter";
import DetailPage from "../pages/DetailPage";
import TodoList from "../pages/TodoList";
import AxiosPrac from "../pages/AxiosPrac";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
						Routes안에 이렇게 작성합니다. 
						Route에는 react-router-dom에서 지원하는 props들이 있습니다.

						paht는 우리가 흔히 말하는 사용하고싶은 "주소"를 넣어주면 됩니다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어줍니다.
				 */}
        <Route path="/" element={<TodoList />} />
        <Route path="detailpage/:id" element={<DetailPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/AP" element={<AxiosPrac />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
