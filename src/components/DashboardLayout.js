import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const DashboardLayout = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>{title}</h2>

        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate(-1)}>Dashboard</p>
        <p style={{ color: "red" }} onClick={() => navigate("/roles")}>
          Logout
        </p>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default DashboardLayout;