import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import * as yup from "yup";

export function AddTeacher() {
  const { addTeacher } = useContext(AppContext);

  const teacherValidationSchema = yup.object({
    name: yup.string().required("why not fill this name?"),
    major: yup.string().required("why not fill this Subject?"),
    contact_number: yup.number().required("why not fill this contact number?"),
    address: yup
      .string()
      .required("why not fill this address?")
      .min(10, "Need a bigger address"),
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        major: "",
        contact_number: "",
        address: "",
      },
      validationSchema: teacherValidationSchema,
      onSubmit: (newTeacher) => {
        console.log("onSubmit", newTeacher);
        addTeacher(newTeacher);
      },
    });

  return (
    <div className="add-teacher-spec">
      <form onSubmit={handleSubmit} className="add-teacher-form">
        <TextField
          className="add-teacher-name"
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
          className="add-teacher-name"
          label="major"
          value={values.major}
          name="major"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.major && errors.major ? true : false}
          helperText={touched.major && errors.major ? errors.major : ""}
        />
        <TextField
          className="add-teacher-name"
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
          className="add-teacher-name"
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
          className="add-teacher-btn"
          color="primary"
          type="submit"
          variant="contained"
        >
          ADD Teacher
        </Button>
      </form>
    </div>
  );
}
