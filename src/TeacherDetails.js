import React from "react";
import { TeacherMessage } from "./TeacherMessage";
import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { useNavigate } from "react-router-dom";

export function TeacherDetails() {
  const { teacherstList, handleDeleteTeacher, getTeacherDetails } =
    useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => getTeacherDetails(), []);

  return (
    <div className="teacher-list">
      {teacherstList.map((disp) => (
        <TeacherMessage
          key={disp.id}
          name={disp.name}
          major={disp.major}
          contact_number={disp.contact_number}
          address={disp.address}
          id={disp.id}
          deleteButton={
            <IconButton
              aria-label="teacher-delete-button"
              color="error"
              onClick={() => handleDeleteTeacher(disp.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              aria-label="teacher-edit-button"
              color="primary"
              onClick={() => navigate(`/teachers/edit/${disp.id}`)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
