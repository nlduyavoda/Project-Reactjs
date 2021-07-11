import React, { useEffect, useReducer, useState } from "react";
import { Formik, Form, FastField, Field, Checkbox } from "formik";
import { Button } from "react-bootstrap";
import { FormReducer } from "../Reducer/FormReducer";
import { SAVE_FORM, GET_FORM } from "../Reducer/type";

function Form_person(props) {
  const initialValues = [];

  const [arr, setArr] = useState([
    { name: "alibaba", age: 12, cookie: ["chocolate", "trawberies"] },
    { name: "simba", age: 12, cookie: ["chocolate"] },
    { name: "johnSnow", age: 12, cookie: ["trawberies"] },
  ]);
  const [state, dispatch] = useReducer(FormReducer, initialValues);
  useEffect(() => {
    // dispatch({ type: SAVE_FORM, payload: arr });
  }, []);
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={(data) => {
          setArr([...arr, { data }]);
          dispatch({ type: SAVE_FORM, payload: arr });
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Field
                name="name"
                placeholder="enter name"
                type="input"
                as={FastField}
              ></Field>
            </div>
            <div>
              <Field
                name="age"
                placeholder="enter age"
                type="input"
                as={FastField}
              ></Field>
              <div>Cookies</div>
              <div>
                <Field name="cookie" type="Checkbox" value="chocolate"></Field>
                chocolate
              </div>
              <div>
                <Field name="cookie" type="Checkbox" value="vanila"></Field>
                vanila
              </div>
              <div>
                <Field name="cookie" type="Checkbox" value="trawberies"></Field>
                trawberies
              </div>

              <div>
                <Button onClick={handleSubmit}>Summit</Button>
              </div>
            </div>
            <div className="container">
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Form_person;
