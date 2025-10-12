import React, { useEffect, useState } from "react";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Our Doctors</h2>
      <div className="row">
        {doctors.map((doc) => (
          <div key={doc._id} className="col-md-4 mb-3">
            <div className="card">
              <img src={doc.image} className="card-img-top" alt={doc.name} />
              <div className="card-body">
                <h5 className="card-title">{doc.name}</h5>
                <p>{doc.specialization}</p>
                <p>{doc.consultationTime} hr consultation</p>
                <p>{doc.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
