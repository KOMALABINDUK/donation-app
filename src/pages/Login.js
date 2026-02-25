import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const credentials = {
    administrator: {
      email: "admin@system.com",
      password: "demo123",
      redirect: "/admin",
      title: "Administrator",
      desc: "Approve donations and manage the system",
    },
    donor: {
      email: "donor@system.com",
      password: "demo123",
      redirect: "/donor",
      title: "Donor",
      desc: "Contribute donations and track status",
    },
    recipient: {
      email: "recipient@system.com",
      password: "demo123",
      redirect: "/recipient",
      title: "Recipient",
      desc: "Request items and track deliveries",
    },
    logistics: {
      email: "logistics@system.com",
      password: "demo123",
      redirect: "/logistics",
      title: "Logistics",
      desc: "Manage transport and delivery updates",
    },
  };

  const current = credentials[role];

  const handleLogin = () => {
    if (email === current.email && password === current.password) {
      setError("");
      navigate(current.redirect);
    } else {
      setError("Invalid credentials for " + current.title);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login as {current?.title}</h2>
        <p>{current?.desc}</p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="demo-box">
          <strong>Demo Credentials</strong>
          <p>Email: {current?.email}</p>
          <p>Password: {current?.password}</p>
        </div>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}

        <div className="btn-group">
          <Link to="/roles">
            <button className="back-btn">Back</button>
          </Link>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;