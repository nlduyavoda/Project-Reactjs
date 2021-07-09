import { Button } from "react-bootstrap";
import { useContext, useReducer, useState } from "react";
import { HumanContext } from "../Contexts/HumanContext";
import { HumanReducer } from "../Reducer/HumanReducer";

const HumanId = (props) => {
  const { Jean, HandleDelete, newarr__ } = useContext(HumanContext);
  const [ArrPerson, setArrPerson] = useState(Jean);
  const [Arr_, dispatch] = useReducer(HumanReducer, {Arr_:[]});
  console.log(Arr_);
  let classes = [];
  if (ArrPerson.length < 1) {
    classes.push("red", "bold");
  }

  let ListView = null;
  if (props.show === true) {
    ListView = (
      <div>
        {newarr__.map((item, index) => {
          return (
            <div className="container" id="c2" key={index}>
              <h2 className={classes.join(" ")}> Personal ID: {item.id}</h2>
              <div className="container">
                <p> Name : {item.name}</p>
                <p> Age: 13</p>
                <p>
                  {" "}
                  Description: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illo harum velit tenetur cupiditate
                  dignissimos sed ad maiores excepturi accusantium corporis.
                  Quis, doloribus aut facere qui eaque modi animi nobis id.
                </p>
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
  }
  return <>{ListView}</>;
};
export default HumanId;
