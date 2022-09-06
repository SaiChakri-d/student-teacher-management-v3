import React from "react";

export default function ProjectIllustration() {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
          </div>
          <div className="card-body">
            <h4 className="small font-weight-bold">
              Awareness of education system to rural people
              <span className="float-right">20%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Project Expo and cultural activities{" "}
              <span className="float-right">40%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Social activies by students
              <span className="float-right">60%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Competetive and entrance exam guidance{" "}
              <span className="float-right">80%</span>
            </h4>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="small font-weight-bold">
              Student teacher co-ordination
              <span className="float-right">Complete!</span>
            </h4>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: "100%" }}
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Blended Learning
            </h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: "25rem" }}
                src="https://blog.coursify.me/wp-content/uploads/2017/12/blended-learning-coursifyme-1.jpg"
                alt="..."
              />
            </div>
            <p>
              “A teaching method to which you integrate technological as well as
              virtual activities in conjunction with traditional teaching, using
              planned activities that have a pedagogical value.”{" "}
            </p>
            <p className="mb-0">
              It is important to highlight its hybrid concept, that is, a
              methodology that adequately aggregates teaching by technological
              means, without replacing, but integrating with the traditional
              format.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
