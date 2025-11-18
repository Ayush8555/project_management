import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";
import userService from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        // Verify token is still valid
        if (userData.token) {
          try {
            // Attempt to fetch profile to verify token
            await userService.getProfile(userData.token);
            setUser(userData);
          } catch (err) {
            // Token is invalid, clear storage
            localStorage.removeItem("user");
            setUser(null);
          }
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Register
  const register = async (userData) => {
    try {
      setError(null);
      const data = await authService.register(userData);
      setUser(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      throw err;
    }
  };

  // Login
  const login = async (userData) => {
    try {
      setError(null);
      const data = await authService.login(userData);
      setUser(data);
      return data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    }
  };

  // Logout
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // Get user profile
  const getProfile = async () => {
    try {
      setError(null);
      // Use user.token if available, otherwise check if we have a user
      const token =
        user?.token ||
        (localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user")).token
          : null);
      if (!token) {
        throw new Error("No authentication token found");
      }
      const profile = await userService.getProfile(token);
      return profile;
    } catch (err) {
      // If it's a token error, logout the user
      if (err.response?.status === 401) {
        logout();
      }
      setError(err.response?.data?.message || "Failed to fetch profile");
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    getProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
