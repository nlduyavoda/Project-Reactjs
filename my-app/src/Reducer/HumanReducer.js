import { DELETE_PERSON, RESET_PERSON, GET_PERSON } from "./type";

export const HumanReducer = (state, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case RESET_PERSON:
      state = localStorage.setItem(1, payload.name);
      return state;
    case DELETE_PERSON:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
