const { pool } = require("../config/db");

const initDb = async () => {
  try {
    // Drop table if exists (for testing purposes)
    // await pool.query('DROP TABLE IF EXISTS users');

    // Drop table if exists to recreate with correct structure
    await pool.query("DROP TABLE IF EXISTS users");

    // Create users table
    const createUserTableQuery = `
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await pool.query(createUserTableQuery);
    console.log("Users table created or already exists");

    // Verify table structure
    const tableInfo = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'users'
      ORDER BY ordinal_position
    `);
    console.log("Users table structure:", tableInfo.rows);
  } catch (err) {
    console.error("Error creating tables:", err.message);
    console.error("Full error:", err);
  }
};

module.exports = initDb;
