import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DonorDashboard from "./pages/DonorDashboard";
import RecipientDashboard from "./pages/RecipientDashboard";
import LogisticsDashboard from "./pages/LogisticsDashboard";
import AddDonation from "./pages/AddDonation";

function App() {
  // Load saved data from localStorage
  const [donations, setDonations] = useState(() => {
    return JSON.parse(localStorage.getItem("donations")) || [];
  });

  const [requests, setRequests] = useState(() => {
    return JSON.parse(localStorage.getItem("requests")) || [];
  });

  // Save donations
  useEffect(() => {
    localStorage.setItem("donations", JSON.stringify(donations));
  }, [donations]);

  // Save requests
  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  return (
    <BrowserRouter>
      {/* Top Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 30px",
          alignItems: "center",
          backgroundColor: "#f5f5f5"
        }}
      >
        <h2 style={{ margin: 0 }}>❤️ Helping Hands</h2>

        <Link to="/roles">
          <button
            style={{
              padding: "8px 18px",
              backgroundColor: "#111",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Login →
          </button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<RoleSelection />} />
        <Route path="/login/:role" element={<Login />} />

        <Route
          path="/admin"
          element={
            <AdminDashboard
              donations={donations}
              requests={requests}
            />
          }
        />

        <Route
          path="/donor"
          element={
            <DonorDashboard
              donations={donations}
              setDonations={setDonations}
            />
          }
        />

        <Route
          path="/add-donation"
          element={
            <AddDonation
              onSubmit={(donation) =>
                setDonations([...donations, donation])
              }
            />
          }
        />

        <Route
          path="/recipient"
          element={
            <RecipientDashboard
              requests={requests}
              setRequests={setRequests}
            />
          }
        />

        <Route
          path="/logistics"
          element={<LogisticsDashboard donations={donations} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;