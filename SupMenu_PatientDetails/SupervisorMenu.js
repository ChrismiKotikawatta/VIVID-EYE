import React from "react";
import "../App.css"; // Import CSS file

const SupervisorMenu = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h1 className="card-title mb-4">Supervisor Menu</h1>
              <div
                className="btn-group-vertical"
                role="group"
                aria-label="Supervisor Menu Options"
              >
                <button
                  onClick={() => {
                    window.location.href = "/patient-details";
                  }}
                  className="btn btn-primary btn-lg btn-block mb-3 custom-button"
                >
                  View Patient Details
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/patient-registration";
                  }}
                  className="btn btn-primary btn-lg btn-block custom-button"
                >
                  Register New Patient
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorMenu;
