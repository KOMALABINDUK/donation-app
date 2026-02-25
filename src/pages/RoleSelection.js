import { Link } from "react-router-dom";
import "./RoleSelection.css";

function RoleSelection() {
  return (
    <div className="role-container">

      <div className="role-header">
        <h1>Select Your Role</h1>
        <p>Choose how you'd like to access the system</p>
      </div>

      <div className="role-grid">

        <div className="role-card">
          <h3>Administrator</h3>
          <p>Approve donations and manage the system</p>
          <Link to="/login/administrator">
            <button className="select-btn">Select</button>
          </Link>
        </div>

        <div className="role-card">
          <h3>Donor</h3>
          <p>Contribute donations and track status</p>
          <Link to="/login/donor">
            <button className="select-btn">Select</button>
          </Link>
        </div>

        <div className="role-card">
          <h3>Recipient</h3>
          <p>Request items and track deliveries</p>
          <Link to="/login/recipient">
            <button className="select-btn">Select</button>
          </Link>
        </div>

        <div className="role-card">
          <h3>Logistics</h3>
          <p>Manage transport and delivery updates</p>
          <Link to="/login/logistics">
            <button className="select-btn">Select</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default RoleSelection;