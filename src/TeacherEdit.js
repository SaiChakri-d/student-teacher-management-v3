import React from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import * as yup from "yup";

export function TeacherEdit() {
  const { getTeacher, teacher } = useContext(AppContext);
  const { teacherId } = useParams();

  useEffect(() => getTeacher(teacherId), []);

  return teacher ? <EditForm teacher={teacher} /> : "Loading...";
}
const teacherValidationSchema = yup.object({
  name: yup.string().required("why not fill this name?"),
  major: yup.string().required("why not fill this Major subject?"),
  contact_number: yup.number().required("why not fill this contact number?"),
  address: yup
    .string()
    .required("why not fill this address?")
    .min(10, "Need a bigger address"),
});

function EditForm({ teacher }) {
  const navigate = useNavigate();

  const editTeacher = (updatedTeacher) => {
    fetch(
      `https://624462c139aae3e3b74f6e69.mockapi.io/teachersv3/${teacher.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedTeacher),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        navigate("/TeacherDetails");
      })
      .catch((e) => console.log("ERROR"));
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: teacher.name,
        major: teacher.major,
        contact_number: teacher.contact_number,
        address: teacher.address,
      },
      validationSchema: teacherValidationSchema,
      onSubmit: (updatedTeacher) => {
        editTeacher(updatedTeacher);
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
          color="success"
          type="submit"
          variant="contained"
        >
          SAVE
        </Button>
      </form>
    </div>
  );
}
