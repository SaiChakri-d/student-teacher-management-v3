import { useNavigate } from "react-router-dom";
export function SideBarDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <li className="nav-item active">
        <a onClick={() => navigate("/")} className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>
    </>
  );
}
