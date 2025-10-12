import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminId");
    navigate("/admin/login");
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <p>Welcome, {localStorage.getItem("adminId") || "Admin"}.</p>

      <div className="list-group">
        <button className="list-group-item list-group-item-action" onClick={() => navigate("/admin/add-doctor")}>
          Add Doctor
        </button>
        <button className="list-group-item list-group-item-action" onClick={() => navigate("/admin/doctors")}>
          Manage Doctors
        </button>
        {/* add more admin links here */}
      </div>

      <button className="btn btn-danger mt-4" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
