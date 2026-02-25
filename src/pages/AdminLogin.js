import { Link } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Login as Administrator</h2>
        <p className="subtitle">
          Approve donations and manage the system
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="input-field"
        />

        <div className="demo-box">
          <strong>Demo Credentials:</strong>
          <p>Email: admin@helpinghands.com</p>
          <p>Password: demo123</p>
        </div>

        <div className="button-group">
          <Link to="/roles">
            <button className="back-btn">Back</button>
          </Link>

          <button className="login-btn">Login</button>
        </div>

      </div>

    </div>
  );
}

export default AdminLogin;