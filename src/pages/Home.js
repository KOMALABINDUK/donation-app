import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Donation Management System
        </h1>

        <p className="hero-subtitle">
          Streamlining relief efforts by connecting donors,
          administrators, logistics teams, and recipients
          in one comprehensive platform.
        </p>

        <Link to="/roles">
          <button className="hero-button">
            Get Started →
          </button>
        </Link>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>

        <div className="features-grid">
          <div className="feature-card">
            ❤️
            <h3>Easy Donations</h3>
            <p>Quick and secure donation process.</p>
          </div>

          <div className="feature-card">
            📦
            <h3>Request Management</h3>
            <p>Recipients can submit and track requests.</p>
          </div>

          <div className="feature-card">
            🚚
            <h3>Logistics Tracking</h3>
            <p>Track deliveries efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;