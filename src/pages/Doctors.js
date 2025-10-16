import React, { useState } from "react";
import doctors from "../data/doctors";

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleView = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleBack = () => {
    setSelectedDoctor(null);
  };

  // ✅ Filter doctors by name or specialization
  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Doctors</h2>

      {/* ✅ Search Bar */}
      {!selectedDoctor && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control form-control-lg rounded-pill text-center shadow-sm"
              placeholder="Search doctor by name or specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* ✅ Show doctor detail view */}
      {selectedDoctor ? (
        <div className="doctor-profile text-center animate-fade">
          <img
            src={selectedDoctor.image}
            alt={selectedDoctor.name}
            className="doctor-profile-img rounded-circle shadow"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h3 className="mt-3">{selectedDoctor.name}</h3>
          <h5 className="text-primary">{selectedDoctor.specialization}</h5>
          <p className="fw-bold">{selectedDoctor.qualification}</p>

          {selectedDoctor.consultationTime && (
            <p className="fw-semibold text-secondary">
              ⏰ {selectedDoctor.consultationTime}
            </p>
          )}

          <p className="text-muted px-md-5 mt-3">
            {selectedDoctor.description}
          </p>

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
              ← Back to All Doctors
            </button>
          </div>
        </div>
      ) : (
        // ✅ Show filtered doctors grid
        <div className="row justify-content-center">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc) => (
              <div key={doc._id} className="col-md-4 col-lg-3 mb-4">
                <div className="card shadow-sm h-100 border-0 rounded-4">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{doc.name}</h5>
                    <p className="card-text text-muted">{doc.specialization}</p>
                    <button
                      className="btn btn-outline-primary rounded-pill px-4 mt-2"
                      onClick={() => handleView(doc)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted mt-4">
              No doctors found matching your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Doctors;
