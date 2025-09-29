import { pool } from "../db/db_connect.js";

export async function getAllVerkstad() {
  const [rows] = await pool.query("SELECT * FROM verkstäder");
  return rows;
}

export async function getVerkstadById(id) {
  const [rows] = await pool.query("SELECT * FROM verkstäder WHERE id = ?", [id]);
  return rows[0];
} 
