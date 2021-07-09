import "./App.css";
import Hm from "./Components/Human";
import HmID from "./Components/HumanId";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState, useEffect } from "react";
import { HumanContext } from "./Contexts/HumanContext";
import { AuthContext } from "./Contexts/AuthContext";

function App(props) {
  const Jean__ = useContext(HumanContext);
  const [Jean, setJean] = useState(Jean__);
  const _authContext = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(_authContext.isAuthenticated);
  const ChangeInforJeans = (event) => {
    setJean({ name: event.target.value, age: 14 });
  };
  const __show = () => {
    setIsAuth(!isAuth);
  };
  // useEffect(() => {
  //   isAuth === true ? alert("Login successful !") : alert("Log Out ok !");
  // }, [isAuth]);
  return (
    <>
      <Hm
        name={Jean.name}
        age="32"
        Jeans={Jean}
        ChangeInforJeans={ChangeInforJeans}
        isAuth={isAuth}
        __show={__show}
      >
        <p>
          Peter have a children, her name is {Jean.name} and she is {Jean.age}{" "}
          year old !
        </p>
      </Hm>
      <HmID show={isAuth} person={Jean} />
    </>
  );
}

export default App;
