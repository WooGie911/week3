import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { minusNUM, plusNUM } from "../redux/modules/counter";

const Counter = () => {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const gnumber = useSelector((state) => state.counter.number);

  const onChangeHandlerInCounter = (e) => {
    const { value } = e.target;
    setNum(+value);
    // event.target.value는 문자열 입니다.
    // 이것을 숫자형으로 형변환해주기 위해서 +를 붙여 주었습니다.
  };

  return (
    <div>
      {gnumber}

      <input type="number" onChange={onChangeHandlerInCounter} />
      <button
        onClick={() => {
          dispatch(plusNUM(num));
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(minusNUM(num));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
