import React from "react";

// const counterReducer = (state={sayac:0,text:""}, action1) => {
const counterReducer = (state = { sayac: 0, text: "" }, { type, payload1 }) => {
  switch (type) {
    case "ARTTIR":
      return { sayac: state.sayac + 1, text: payload1 };

    case "RESET":
      return { sayac: 0, text: payload1 };

    case "AZALT":
      return { sayac: state.sayac - 1 };

    default:
      return state;
  }
};
export default counterReducer;
