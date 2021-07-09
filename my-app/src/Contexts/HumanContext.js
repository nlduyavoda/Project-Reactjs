import { createContext, useEffect, useReducer, useState } from "react";
import { HumanReducer } from "../Reducer/HumanReducer";
import { DELETE_PERSON, GET_PERSON } from "../Reducer/type";
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
  const [newarr__, dispatch] = useReducer(HumanReducer, initial);

  const HandleDelete = (id) => {
    dispatch({ type: DELETE_PERSON, payload: { id } });
    setJean(newarr__);
  };

  useEffect(() => {
    dispatch({ type: GET_PERSON });
    console.log("UseEffect");
  }, [Jean]);

  const HumanContextData = {
    Jean,
    newarr__,
    person,
    HandleDelete,
  };
  return (
    <HumanContext.Provider value={HumanContextData}>
      {children}
    </HumanContext.Provider>
  );
};
export default HumanContextProvider;
