import "./App.css";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { Dashboard } from "./Dashboard";
import Footer from "./Footer";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { StudentDetails } from "./StudentDetails";
import { TeacherDetails } from "./TeacherDetails";
import { AddStudent } from "./AddStudent";
import { AddTeacher } from "./AddTeacher";
import { Login } from "./Login";
import { ForgetPassword } from "./ForgetPassword";
import { Register } from "./Register";
import { NotFound } from "./NotFound";
import { StudentEdit } from "./StudentEdit";
import { TeacherEdit } from "./TeacherEdit";
import { Appstate } from "./AppContext";

function App() {
  return (
    <>
      <div id="wrapper">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgot-Password" element={<ForgetPassword />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<MainBoard flow="" />} />
          <Route
            path="/StudentDetails"
            element={<MainBoard flow="StudentDetails" />}
          />
          <Route
            path="/TeacherDetails"
            element={<MainBoard flow="TeacherDetails" />}
          />
          <Route path="/AddStudent" element={<MainBoard flow="AddStudent" />} />
          <Route path="/Tables" element={<MainBoard flow="Tables" />} />
          <Route path="/404-Page" element={<MainBoard flow="404-Page" />} />
          <Route path="*" element={<Navigate replace to="/404-Page" />} />
          <Route path="/Dashboard" element={<Navigate replace to="/" />} />
          <Route
            path="/students/edit/:studentId"
            element={<MainBoard flow="StudentEdit" />}
          />
          <Route
            path="/teachers/edit/:teacherId"
            element={<MainBoard flow="TeacherEdit" />}
          />
          <Route
            path="/Add-Student"
            element={<MainBoard flow="AddStudent" />}
          />
          <Route
            path="/Add-Teacher"
            element={<MainBoard flow="AddTeacher" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

function MainBoard({ flow }) {
  return (
    <>
      <Appstate>
        <div id="wrapper" style={{ width: "100%" }}>
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <section className="routes-container">
                  {
                    {
                      "": <Dashboard />,
                      StudentDetails: <StudentDetails />,
                      TeacherDetails: <TeacherDetails />,
                      AddStudent: <AddStudent />,
                      AddTeacher: <AddTeacher />,
                      "404-Page": <NotFound />,
                      StudentEdit: <StudentEdit />,
                      TeacherEdit: <TeacherEdit />,
                    }[flow]
                  }
                </section>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Appstate>
    </>
  );
}
