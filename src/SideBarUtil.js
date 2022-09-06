import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SideBarUtil() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <li className="nav-item">
        <a
          onClick={() => setShow(!show)}
          className={show ? "nav-link collapsed" : "nav-link"}
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded={show ? "false" : "true"}
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-chalkboard-teacher"></i>
          <span>Teachers</span>
        </a>
        <div
          id="collapseUtilities"
          className={show ? "collapse show" : "collapse"}
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">TEACHERS SECTION:</h6>
            <a
              onClick={() => navigate("/TeacherDetails")}
              className="collapse-item"
            >
              TEACHERS DETAILS
            </a>
            <a
              onClick={() => navigate("/Add-Teacher")}
              className="collapse-item"
            >
              ADD TEACHER
            </a>
          </div>
        </div>
      </li>
    </>
  );
}
