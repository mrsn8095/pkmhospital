import React, { useState } from "react";
import departments from "../data/departments";

const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 View department details
  const handleView = (department) => {
    setSelectedDepartment(department);
  };

  // 🔹 Go back to all departments
  const handleBack = () => {
    setSelectedDepartment(null);
  };

  // 🔹 Filter departments by name or description
  const filteredDepartments = departments.filter((dept) => {
    const name = dept?.name?.toLowerCase() || "";
    const description = dept?.description?.toLowerCase() || "";
    const term = searchTerm.toLowerCase();

    return name.includes(term) || description.includes(term);
  });

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Departments</h2>

      {/* 🔹 Search Bar */}
      {!selectedDepartment && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill text-center shadow-sm"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* 🔹 Department Details View */}
      {selectedDepartment ? (
        <div className="text-center animate-fade">
          <img
            src={selectedDepartment.image}
            alt={selectedDepartment.name}
            className="rounded-circle shadow"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />

          <h3 className="mt-3">{selectedDepartment.name}</h3>

          {selectedDepartment.description && (
            <p className="text-muted px-md-5 mt-3">
              {selectedDepartment.description}
            </p>
          )}

          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="/appointment"
              className="btn btn-primary rounded-pill px-4"
            >
              Make an Appointment
            </a>
            <button
              className="btn btn-outline-secondary rounded-pill px-4"
              onClick={handleBack}
            >
              ← Back to All Departments
            </button>
          </div>
        </div>
      ) : (
        // 🔹 All Departments Grid
        <div className="row justify-content-center">
          {filteredDepartments.length > 0 ? (
            filteredDepartments.map((dept) => (
              <div key={dept._id || dept.name} className="col-md-4 col-lg-3 mb-4">
                <div className="card shadow-sm h-100 border-0 rounded-4">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{dept.name}</h5>
                    <p className="card-text text-muted">
                      {dept.shortDescription || ""}
                    </p>
                    <button
                      className="btn btn-outline-primary rounded-pill px-4 mt-2"
                      onClick={() => handleView(dept)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted mt-4">
              No departments found matching your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Departments;
