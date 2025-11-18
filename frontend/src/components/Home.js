import React from "react";
import { Link } from "react-router-dom";
import "./AuthStyles.css";

const Home = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <svg
              viewBox="0 0 24 24"
              width="40"
              height="40"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h1 className="auth-title">JWT Authentication</h1>
          <p className="auth-subtitle">A full-stack authentication solution</p>
        </div>

        <div className="auth-form">
          <Link
            to="/register"
            className="auth-button"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Create Account
          </Link>
          <div className="auth-divider">or</div>
          <Link
            to="/login"
            className="auth-button"
            style={{
              backgroundColor: "white",
              color: "#3b82f6",
              border: "1px solid #cbd5e1",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Sign In
          </Link>
        </div>

        <div className="auth-footer">
          <h3>Features</h3>
          <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              🔒 Secure JWT-based authentication
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              🐘 PostgreSQL database integration
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              🔐 Password encryption with bcrypt
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              📱 Responsive React frontend
            </li>
            <li>🖥️ Express.js backend API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
