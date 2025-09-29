import { pool } from "../db/db_connect.js";

export async function getAllProblem() {
  const [rows] = await pool.query("SELECT * FROM `bilproblem`");
  return rows;
}

export async function getProblemById(id) {
  const [rows] = await pool.query("SELECT * FROM `bilproblem` WHERE id = ?", [id]);
  return rows[0];
}