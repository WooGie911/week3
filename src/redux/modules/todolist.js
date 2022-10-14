const INPUT_TEXT = "INPUT_TEXT";
const USER_REVISE = "USER_REVISE";
const DELETE_DATA = "DELETE_DATA";

export const inputText = (payload) => {
  return {
    type: INPUT_TEXT,
    payload, // payload:payload,   key와 value 가 같으면 축약가능
  };
};
export const userRevise = (payload) => {
  return {
    type: USER_REVISE,
    payload,
  };
};
export const deleteData = (payload) => {
  return {
    type: DELETE_DATA,
    payload,
  };
};

// 초기 상태값
const initialState = {
  user: [
    {
      id: 1,
      title: "리액트 공부하기",
      body: "해도해도 끝이 없다...",
      isDone: false,
    },
    {
      id: 2,
      title: "진짜로?!",
      body: "아닐껄?",
      isDone: true,
    },
  ],
};

const todolist = (state = initialState, action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case INPUT_TEXT:
      state.user.push(action.payload);
      // console.log("---", { ...state, user: [...state.user] });
      return { ...state, user: [...state.user] };

    //완료 취소 기능
    case USER_REVISE:
      state.user.map((value, index, array) => {
        if (value.id === action.payload) {
          value.isDone = !value.isDone;
        }
      });
      return { ...state, user: [...state.user] };

    //삭제 기능
    case DELETE_DATA:
      const indexId = state.user.findIndex((user) => {
        if (user.id === action.payload) {
          return true;
        }
        return false;
      });
      state.user.splice(indexId, 1);
      return { ...state, user: [...state.user] };

    default:
      return state;
  }
};

export default todolist;
