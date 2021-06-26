import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { phoneRegExp } from "../../../Helper/constant";
import style from "./style.module.css";

function CreateForm() {
  var initialValues = {
    gender: "",
    email: "",
    userName: "",
    password: "",
    phone: "",
    dob: "",
  };

  const validationSchema = Yup.object({
    gender: Yup.string().required("* Required"),
    email: Yup.string()
      .email("Please type a valid email address")
      .required("* Required"),
    userName: Yup.string().required("* Required"),
    password: Yup.string().required("* Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Please type a valid mobile number")
      .required("* Required"),
    dob: Yup.string(),
  });

  const onSubmit = (values) => {
    console.log("shiv", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={style.formInput}>
        <h3>Please fill in your data here</h3>

        <label htmlFor="gender">Gender</label>
        <Field name="gender" className={style.textField} />
        <ErrorMessage name="gender">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={style.textField} />
        <ErrorMessage name="email">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="userName">User Name</label>
        <Field name="userName" className={style.textField} />
        <ErrorMessage name="userName">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" className={style.textField} />
        <ErrorMessage name="password">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="phone">Phone</label>
        <Field
          name="phone"
          placeholder="+91 9999999999"
          className={style.textField}
        />
        <ErrorMessage name="phone">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="dob">DOB</label>
        <Field name="dob" className={style.textField} />
        <ErrorMessage name="dob">
          {(msg) => <div className={style.error}>{msg}</div>}
        </ErrorMessage>

        <button type="submit" className={style.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default CreateForm;
