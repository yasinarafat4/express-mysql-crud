// Get the client
import mysql from "mysql2/promise";

// Create the connection to database
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express_crud_db",
});
console.log("MySQL Connected Successfully!");
// SQL to create a table
const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

// Execute the query
await db.execute(createTableQuery);
console.log("'users' table created Successfully!");
