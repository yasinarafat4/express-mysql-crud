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

// SQL create a table
// const createTableQuery = `
//       CREATE TABLE IF NOT EXISTS users (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       )
//     `;

// Execute the query
// await db.execute(createTableQuery);
// console.log("'users' table created Successfully!");

// CRUD Operations
// Insert:
// -------
// try {
//   await db.execute(`
//     INSERT INTO users(name, email) VALUES(?,?)
//   `, ['Yasin', 'yasin@gmail.com']);
//   console.log("User inserted successfully!");
// } catch (error) {
//   console.error("Insert failed:", error.message);
// }

// Read:
// -----
// try {
//   const [rows] = await db.execute("SELECT * FROM users");
//   console.log("Users fetched successfully:");
//   console.table(rows); 
// } catch (error) {
//   console.error("Failed to fetch users:", error.message);
// }

// Update:
// -------
// try {
//     const [result] = await db.execute(
//       "UPDATE users SET name = ?, email = ? WHERE id = ?",
//       ['Arafat', 'arafat@gmail.com', 1]
//     );

//     if (result.affectedRows > 0) {
//       console.log("User updated successfully!");
//     } else {
//       console.log("No user found with the given ID.");
//     }
//   } catch (error) {
//     console.error("Failed to update user:", error.message);
//   }