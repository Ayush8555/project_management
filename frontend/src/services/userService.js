import axios from "axios";

const API_URL = "http://localhost:5001/api/users";

// Get user profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/profile`,
    config
  );
  return response.data;
};

const userService = {
  getProfile,
};

export default userService;
