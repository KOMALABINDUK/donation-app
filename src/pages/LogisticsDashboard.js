import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const RecipientDashboard = ({ requests }) => {
  return (
    <DashboardLayout title="Recipient">
      <h1>Recipient Dashboard</h1>
      <p>Request items and track deliveries.</p>

      {requests && requests.length === 0 && <p>No requests yet.</p>}
    </DashboardLayout>
  );
};

export default RecipientDashboard;