import { SideBarComp } from "./SideBarComp";
import { SideBarDashboard } from "./SideBarDashboard";
import { SideBarUtil } from "./SideBarUtil";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Student Management Admin</div>
        </a>

        <hr className="sidebar-divider my-0" />
        <SideBarDashboard />

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">DETAILS</div>

        <SideBarComp />

        <SideBarUtil />

        <hr className="sidebar-divider" />
      </ul>
    </>
  );
}
