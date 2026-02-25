import React from "react";
import DashboardLayout from "../components/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout title="Administrator">
      <h1>Admin Dashboard</h1>
      <p>Approve donations and manage the system.</p>
    </DashboardLayout>
  );
};

export default AdminDashboard;