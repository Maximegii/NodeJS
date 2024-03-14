import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    database: "nodejs",
    user: "root",
    password: "",
})

export default pool.promise(); 