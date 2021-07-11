import { createContext, useEffect, useReducer, useState } from "react";
import { HumanReducer } from "../Reducer/HumanReducer";
import { DELETE_PERSON, GET_PERSON, RESET_PERSON } from "../Reducer/type";
export const HumanContext = createContext();
const HumanContextProvider = ({ children }) => {
  const [Jean, setJean] = useState([
    { id: 222884675, name: "Jean", age: 11, description: "lorem" },
    { id: 645778265, name: "Peter", age: 23, description: "lorem" },
    { id: 228447660, name: "Lora", age: 17, description: "lorem" },
  ]);
  const [person, setPerson] = useState([
    { name: "duy", age: 23 },
    { name: "perter", age: 12 },
  ]);

  const initial = Jean;
  const [state, dispatch] = useReducer(HumanReducer, initial);

  const HandleDelete = (id) => {
    dispatch({ type: DELETE_PERSON, payload: { id } });
    setJean(state);
  };
  const HandleSave = (item) => {
    dispatch({ type: RESET_PERSON, payload: {name: item.name } });
  };

  useEffect(() => {
    dispatch({ type: GET_PERSON });
  }, [Jean]);

  const HumanContextData = {
    Jean,
    state,
    person,
    HandleDelete,
    HandleSave,
  };
  return (
    <HumanContext.Provider value={HumanContextData}>
      {children}
    </HumanContext.Provider>
  );
};
export default HumanContextProvider;
