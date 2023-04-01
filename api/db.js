import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mahdyah123",
  database: "judgers"
})