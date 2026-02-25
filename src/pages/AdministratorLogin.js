import { useParams, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const { role } = useParams();

  const roles = {
    administrator: {
      title: "Administrator",
      desc: "Approve donations and manage the system",
      email: "admin@system.com",
    },
    donor: {
      title: "Donor",
      desc: "Contribute donations and track status",
      email: "donor@system.com",
    },
    recipient: {
      title: "Recipient",
      desc: "Request items and track deliveries",
      email: "recipient@system.com",
    },
    logistics: {
      title: "Logistics",
      desc: "Manage transport and delivery updates",
      email: "logistics@system.com",
    },
  };

  const current = roles[role];

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login as {current?.title}</h2>
        <p>{current?.desc}</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <div className="demo-box">
          <strong>Demo Credentials</strong>
          <p>Email: {current?.email}</p>
          <p>Password: demo123</p>
        </div>

        <div className="btn-group">
          <Link to="/roles">
            <button className="back-btn">Back</button>
          </Link>
          <button className="login-btn">Login</button>
        </div>

      </div>
    </div>
  );
}

export default Login;