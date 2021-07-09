import { DELETE_PERSON, RESET_ARR, GET_PERSON } from "./type";

export const HumanReducer = (state, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case GET_PERSON:
      return state;
    case DELETE_PERSON:
      return state.filter((item) => item.id !== payload.id);
    default:
      return state;
  }
};
