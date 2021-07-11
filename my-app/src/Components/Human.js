import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { HumanContext } from "../Contexts/HumanContext";
import { themeContexts } from "../Contexts/ThemeContext";
import Formperson from "../Components/Form_person";
const Human = (props) => {
  const testContext = useContext(themeContexts);
  const { person, HandleSave } = useContext(HumanContext);
  const [person_, setPerson] = useState(person);
  const { isTheme, light, dark } = testContext.theme;
  const [mode, setmode] = useState(isTheme);

  const style = mode ? light : dark;
  const changeModeColor = () => {
    setmode(!mode);
  };
  let ButtonLogin = null;

  if (props.isAuth === false) {
    ButtonLogin = (
      <Button id="btn__show" onClick={props.__show} className="btn btn-danger">
        Login
      </Button>
    );
  }
  if (props.isAuth === true) {
    ButtonLogin = (
      <Button id="btn__show" onClick={props.__show} className="btn btn-danger">
        Log Out
      </Button>
    );
  }
  return (
    <div className="container" style={style} id="c1">
      <h1>
        his name is {person_[0].name} - his age is {person_[0].age}
      </h1>
      <p>{props.children}</p>
      <input
        type="text"
        value={props.name}
        onChange={props.ChangeInforJeans}
        placeholder="Change Jeans name"
      />{" "}
      {ButtonLogin}
      <Button
        id="btn__show"
        onClick={() => HandleSave(props.name)}
        className="btn btn-info"
      >
        Save
      </Button>
      <Button id="btn__show" onClick={() => changeModeColor()}>
        Change Color
      </Button>
    </div>
  );
};
export default Human;
