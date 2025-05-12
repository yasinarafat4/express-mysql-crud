// Get the client
import mysql from "mysql2/promise";

// Create the connection to database
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  //   database: 'test',
});
console.log("MySQL Connected Successfully!");
