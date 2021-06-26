import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as login from "../../../Helper/loginData.json";
import { mrContext } from "../../../Helper/Context";
import style from "./style.module.css";

function AuthForm() {
  const { setLoggedIn } = useContext(mrContext);
  const [err, setErr] = useState(false);

  var initialValues = {
    userName: "",
    password: "",
  };
  const validationSchema = Yup.object({
    userName: Yup.string().required("* Required"),
    password: Yup.string().required("* Required"),
  });

  const onSubmit = (values) => {
    const loginCheck =
      values.userName === login.username && values.password === login.password;

    if (loginCheck) return setLoggedIn(true); setErr(false);
    return setErr(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        {err && (
          <h3 className={style.error}>
            Please type correct username and password
          </h3>
        )}

        <label htmlFor="userName">User Name</label>
        <Field name="userName" className={style.textField} />
        <ErrorMessage name="userName">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>
        <br />
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={style.textField} />
        <ErrorMessage name="password">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <div className={style.buttons}>
          <button type="submit" className={style.button}>
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default AuthForm;
