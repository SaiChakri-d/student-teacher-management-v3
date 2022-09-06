import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppContext = createContext();

const Appstate = (props) => {
  const navigate = useNavigate();
  const [numOfTeacher, setNumOfTeacher] = useState(null);
  const [numOfStudent, setNumOfStudent] = useState(null);
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState(null);
  const [teacherstList, setTeachersList] = useState([]);
  const [teacher, setTeacher] = useState(null);

  const getTeacher = (teacherId) => {
    fetch(`https://624462c139aae3e3b74f6e69.mockapi.io/teachersv3/${teacherId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setTeacher(mv));
  };

  const handleDeleteTeacher = (deletionId) => {
    fetch(
      `https://624462c139aae3e3b74f6e69.mockapi.io/teachersv3/${deletionId}`,
      {
        method: "DELETE",
      }
    ).then(() => getTeacherDetails());
  };
  const getTeacherDetails = () => {
    fetch("https://624462c139aae3e3b74f6e69.mockapi.io/teachersv3", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setTeachersList(mvs));
  };
  const getStudent = (studentId) => {
    fetch(`https://624462c139aae3e3b74f6e69.mockapi.io/studentsv3/${studentId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setStudent(mv));
  };
  const getTeachers = () => {
    fetch("https://624462c139aae3e3b74f6e69.mockapi.io/teachersv3", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => {
        setNumOfTeacher(mvs.length);
      });
  };
  const getStudents = () => {
    fetch(`https://624462c139aae3e3b74f6e69.mockapi.io/studentsv3/`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setNumOfStudent(mv.length));
  };

  const addStudent = (newStudent) => {
    fetch("https://624462c139aae3e3b74f6e69.mockapi.io/studentsv3", {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/StudentDetails"));
  };

  const addTeacher = (newTeacher) => {
    fetch("https://624462c139aae3e3b74f6e69.mockapi.io/teachersv3", {
      method: "POST",
      body: JSON.stringify(newTeacher),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/TeacherDetails"));
  };
  const getStudentDetails = () => {
    fetch("https://624462c139aae3e3b74f6e69.mockapi.io/studentsv3", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mvs) => setStudentList(mvs));
  };
  const handleDeleteStudent = (deletionId) => {
    fetch(
      `https://624462c139aae3e3b74f6e69.mockapi.io/studentsv3/${deletionId}`,
      {
        method: "DELETE",
      }
    ).then(() => getStudentDetails());
  };

 

  return (
    <AppContext.Provider
      value={{
        addStudent,
        addTeacher,
        getTeachers,
        getStudents,
        numOfTeacher,
        numOfStudent,
        studentList,
        getStudentDetails,
        handleDeleteStudent,
        getStudent,
        student,
        teacherstList,
        handleDeleteTeacher,
        getTeacherDetails,
        getTeacher,
        teacher,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { Appstate, AppContext };
