import { pool } from "../db/db_connect.js";

export async function getAllBilar() {
  const [rows] = await pool.query("SELECT * FROM bilar");
  return rows;
}

export async function getBilarByMarke(marke) {
  const [rows] = await pool.query("SELECT * FROM bilar WHERE märke = ?", [marke]);
  return rows;
}

export async function getBilarById(id) {
  const [rows] = await pool.query("SELECT * FROM bilar WHERE `reg(pk)` = ?", [id]);
  return rows;
}
