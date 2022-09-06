import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <li
        className={
          show
            ? "nav-item dropdown no-arrow show"
            : "nav-item dropdown no-arrow"
        }
      >
        <a
          onClick={() => setShow(!show)}
          className="nav-link dropdown-toggle"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={show ? "true" : "false"}
        >
          <span className="mr-2 d-none d-lg-inline text-dark-600 ">
            Sai Chakri
          </span>
          <img
            className="img-profile rounded-circle"
            src="img/undraw_profile.svg"
          />
        </a>

        <div
          className={
            show
              ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show"
              : "dropdown-menu dropdown-menu-right shadow animated--grow-in"
          }
          aria-labelledby="userDropdown"
        >
          <a className="dropdown-item">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a className="dropdown-item">
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a className="dropdown-item">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div className="dropdown-divider"></div>
          <a
            onClick={() => navigate("/Login")}
            className="dropdown-item"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </>
  );
}
