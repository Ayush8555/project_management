import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import "./AuthStyles.css";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, getProfile, logout, error } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getProfile();
        setProfile(profileData);
      } catch (err) {
        console.error(err);
        // If there's an auth error, redirect to login
        if (err.response?.status === 401) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchProfile();
    } else {
      // Check if user exists in localStorage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        // Parse and set user from localStorage
        const userData = JSON.parse(storedUser);
        // Verify token before proceeding
        if (userData.token) {
          fetchProfile();
        } else {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }
  }, [user, getProfile, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="dashboard-logout" onClick={handleLogout}>
          Sign out
        </button>
      </div>

      {error && <div className="auth-error">{error}</div>}



     
    </div>
  );
};

export default Dashboard;
