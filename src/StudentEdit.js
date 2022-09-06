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

export function StudentEdit() {
  const { getStudent, student } = useContext(AppContext);

  const { studentId } = useParams();

  useEffect(() => getStudent(studentId), []);

  return student ? <EditForm student={student} /> : "Loading...";
}
const studentValidationSchema = yup.object({
  name: yup.string().required("why not fill this name?"),
  standard: yup.string().required("why not fill this Standard?"),
  contact_number: yup.number().required("why not fill this contact number?"),
  address: yup
    .string()
    .required("why not fill this address?")
    .min(10, "Need a bigger address"),
});

function EditForm({ student }) {
  const navigate = useNavigate();

  const editStudent = (updatedStudent) => {
    fetch(
      `https://624462c139aae3e3b74f6e69.mockapi.io/studentsv3/${student.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedStudent),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then(() => {
        navigate("/StudentDetails");
      })
      .catch((e) => console.log("ERROR"));
    //  navigate("/Movies");
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: student.name,
        standard: student.standard,
        contact_number: student.contact_number,
        address: student.address,
      },
      validationSchema: studentValidationSchema,
      onSubmit: (updatedStudent) => {
        console.log("onSubmit", updatedStudent);
        editStudent(updatedStudent);
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
