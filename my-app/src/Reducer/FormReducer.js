import { SAVE_FORM, GET_FORM } from "./type";
export const FormReducer = (state, action) => {
  const { type, payload } = action;
  const id = Math.floor(Math.random() * 999);
  switch (action.type) {
    case GET_FORM:
      state = localStorage.getItem(1);
      state = JSON.parse(state);
      console.log(state);
      return state;
    case SAVE_FORM:
      localStorage.setItem(1, JSON.stringify(payload));
      return payload;
    default:
      return state;
  }
};
