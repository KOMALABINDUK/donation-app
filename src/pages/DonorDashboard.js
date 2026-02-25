import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const DonorDashboard = ({ donations }) => {
  return (
    <DashboardLayout title="Donor">
      <h1>Donor Dashboard</h1>
      <p>Contribute donations and track status.</p>

      <h3>Your Donations</h3>

      {donations && donations.length === 0 && <p>No donations yet.</p>}

      {donations &&
        donations.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >
            <p><strong>ID:</strong> {item.id}</p>
            <p><strong>Item:</strong> {item.item}</p>
            <p><strong>Status:</strong> {item.status}</p>
          </div>
        ))}
    </DashboardLayout>
  );
};

export default DonorDashboard;