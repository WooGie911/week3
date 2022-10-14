// src/modules/counter.js

// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_NUM = "PLUS_NUM";
const MINUS_NUM = "MINUS_NUM";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다.
export const plusNUM = (payload) => {
  return {
    type: PLUS_NUM,
    payload: payload, // payload   key와 value 가 같으면 축약가능
  };
};

export const minusNUM = (payload) => {
  return {
    type: MINUS_NUM,
    payload: payload, //payload   key와 value 가 같으면 축약가능
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    // PLUS_ONE이라는 case를 추가한다.
    // 여기서 말하는 case란, action.type을 의미한다.
    // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
    // 아래 return 절이 실행된다.
    case "PLUS_NUM":
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
        number: state.number + action.payload,
      };

    case "MINUS_NUM":
      // console.log(state);
      return {
        // state.number (기존의 nubmer)에 action.paylaod(유저가 빼길 원하는 값)을 뺸다다.
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
