import { CardDashboard } from "./CardDashboard";
import { ChartDashboard } from "./ChartDashboard";
import ProjectIllustration from "./ProjectIllustration";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
export function Dashboard() {
  const { getTeachers, getStudents, numOfTeacher, numOfStudent } =
    useContext(AppContext);
  useEffect(() => {
    getTeachers();
    getStudents();
  }, []);

  return (
    <>
      <div className="d-sm-flex align-items-center  mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div className="row">
        <CardDashboard
          detail="Total number of students"
          value={numOfStudent}
          iprop="fas fa-book-reader fa-2x text-gray-300"
        />
        <CardDashboard
          detail="Total number of teachers"
          value={numOfTeacher}
          iprop="fas fa-chalkboard-teacher fa-2x text-gray-300"
        />
      </div>
      <ChartDashboard />
      <ProjectIllustration />
    </>
  );
}
