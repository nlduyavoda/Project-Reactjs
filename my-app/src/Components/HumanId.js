import { Button } from "react-bootstrap";
import { useContext, useEffect, useReducer, useState } from "react";
import { HumanContext } from "../Contexts/HumanContext";
import { HumanReducer } from "../Reducer/HumanReducer";
import Formperson from "../Components/Form_person";
import { FormReducer } from "../Reducer/FormReducer";
import { GET_FORM } from "../Reducer/type";

const HumanId = (props) => {
  const { HandleDelete } = useContext(HumanContext);
  const initialValues = [];
  const [state, dispatch] = useReducer(FormReducer, initialValues);
  useEffect(() => {
    dispatch({ type: GET_FORM, payload: null });
  }, []);

  let ListView = null;
  if (props.show === true) {
    ListView = (
      <div>
        {state.map((item, index) => {
          let classes = [];
          if (state.length <= 1) {
            classes.push("red", "bold");
          }
          return (
            <div className="container" id="c2" key={index}>
              <h2 className={classes.join(" ")}> Personal ID: {item.id}</h2>
              <div className="container">
                <p> Name : {item.name}</p>
                <p> Age: {item.age}</p>
                <div>Hobbies</div>
                <p>{item.cookie}</p>
              </div>

              <Button
                id="button__increase"
                onClick={() => HandleDelete(item.id)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    );
  } else
    ListView = (
      <div>
        <Formperson></Formperson>
      </div>
    );
  return <>{ListView}</>;
};
export default HumanId;
