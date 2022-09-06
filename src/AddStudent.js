import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import * as yup from "yup";

export function AddStudent() {
  const { addStudent } = useContext(AppContext);

  const studentValidationSchema = yup.object({
    name: yup.string().required("why not fill this name?"),
    standard: yup.string().required("why not fill this Standard?"),
    contact_number: yup.number().required("why not fill this contact number?"),
    address: yup
      .string()
      .required("why not fill this address?")
      .min(10, "Need a bigger address"),
  });

  // const addStudent =(newStudent) => {
  //   fetch("https://62aa7f0d371180affbd633f8.mockapi.io/students", {
  //   method: "POST",
  //   body: JSON.stringify(newStudent),
  //   headers: {
  //     "Content-Type" : "application/json",
  //   },
  // }).then(() => navigate("/StudentDetails"));
  // };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        standard: "",
        contact_number: "",
        address: "",
      },
      validationSchema: studentValidationSchema,
      onSubmit: (newStudent) => {
        console.log("onSubmit", newStudent);
        addStudent(newStudent);
      },
    });

  return (
    <div className="add-student-spec">
      <form onSubmit={handleSubmit} className="add-student-form">
        <TextField
          className="add-student-name"
          label="Name"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name ? true : false}
          helperText={touched.name && errors.name ? errors.name : ""}
        />
        <TextField
          className="add-student-name"
          label="standard"
          value={values.standard}
          name="standard"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.standard && errors.standard ? true : false}
          helperText={
            touched.standard && errors.standard ? errors.standard : ""
          }
        />
        <TextField
          className="add-student-name"
          label="contact_number"
          type="text"
          value={values.contact_number}
          name="contact_number"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.contact_number && errors.contact_number ? true : false}
          helperText={
            touched.contact_number && errors.contact_number
              ? errors.contact_number
              : ""
          }
        />
        <TextField
          className="add-student-name"
          label="address"
          type="text"
          value={values.address}
          name="address"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && errors.address ? true : false}
          helperText={touched.address && errors.address ? errors.address : ""}
        />
        <Button
          className="add-student-btn"
          color="primary"
          type="submit"
          variant="contained"
        >
          ADD STUDENT
        </Button>
      </form>
    </div>
  );
}
