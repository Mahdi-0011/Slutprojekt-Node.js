import { pool } from "../db/db_connect.js";

export async function getAllServis() {
  const [rows] = await pool.query("SELECT * FROM `servis ärende`");
  return rows;
}

export async function getServisById(id) {
  const [rows] = await pool.query("SELECT * FROM `servis ärende` WHERE id = ?", [id]);
  return rows;
}

// Hämtar meta-data för servisärende
export async function getMetaServis() {
  // const [rows] = await pool.query(`
  // SELECT s.\`reg(fk)\`, s.\`inlämnad datum\`, s.\`hämtad datum\`FROM \`servis ärende\` AS s
  // `);
  const [rows] = await pool.query(`
    SELECT
      COUNT(*) AS total_servis,                     
      MIN(\`inlämnad datum\`) AS första_inlämnad,  
      MAX(\`hämtad datum\`) AS senaste_hämtad       
    FROM \`servis ärende\`
  `);
  return rows;
}