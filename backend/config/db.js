const { Pool } = require("pg");
require("dotenv").config();

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test the database connection
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log("PostgreSQL connected successfully");
    client.release();
  } catch (err) {
    console.error("Database connection failed:", err.message);
    // Don't exit in development
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    }
  }
};

module.exports = { pool, connectDB };
