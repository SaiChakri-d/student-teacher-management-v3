import React from "react";

export function ChartDashboard() {
  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                STUDENT RESPONSIBILITIES
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdow.ponMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item">Action</a>
                  <a className="dropdown-item">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Something else here</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="pt-4 pb-2 text-dark">
                <ul>
                  <li>Attending classes regularly on time</li>
                  <li>
                    Being prepared for classes with all necessary supplies
                  </li>
                  <li>Taking good care of school property</li>
                  <li>Completing all assignments on time</li>
                  <li>Organizing their time well</li>
                  <li>Respecting themselves and others</li>
                  <li>Reading on a regular basis</li>
                  <li>Doing their best</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                TEACHER RESPONSIBILITIES
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item">Action</a>
                  <a className="dropdown-item">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Something else here</a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="pt-4 pb-2 text-dark">
                <ul>
                  <li>
                    Present lessons in a comprehensive manner and use
                    visual/audio means to facilitate learning
                  </li>
                  <li>
                    Assess and record students’ progress and provide grades and
                    feedback
                  </li>
                  <li>Maintain a tidy and orderly classroom</li>
                  <li>
                    Collaborate with other teachers, parents and stakeholders
                    and participate in regular meetings
                  </li>
                  <li>
                    Plan and execute educational in-class and outdoor activities
                    and events
                  </li>
                  <li>
                    Observe and understand students’ behavior and psyche and
                    report suspicions of neglect, abuse etc.
                  </li>
                  <li>
                    Develop and enrich professional skills and knowledge by
                    attending seminars, conferences etc.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
