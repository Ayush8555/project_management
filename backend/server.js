const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectDB } = require("./config/db");
const initDb = require("./utils/initDb");

const app = express();

// Connect to database
connectDB();

// Initialize database tables
initDb();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", require("./routes/index"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Test route
app.get("/", (req, res) => {
  res.json({ message: "JWT Authentication API is running!" });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
