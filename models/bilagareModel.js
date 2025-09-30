import { pool } from "../db/db_connect.js";


// Hämtar alla bilägare
export async function getAllBilagare() {
  const [rows] = await pool.query("SELECT * FROM `bil ägare`");
  return rows;
}

// Hämtar meta-data för bilägare och antal bilar per ägare
export async function getMetaBilagare() {
  // const [rows] = await pool.query(`
  //   SELECT \`bil ägare\`.förnamn, \`bil ägare\`.efternamn, COUNT(bilar.\`reg(pk)\`) AS antal_bilar
  //   FROM \`bil ägare\`
  //   LEFT JOIN bilar ON bilar.\`bil ägare id(fk)\` = \`bil ägare\`.id
  //   GROUP BY \`bil ägare\`.id
  // `);
  const [rows] = await pool.query(`
    SELECT
      (SELECT COUNT(*) FROM \`bil ägare\`) AS total_ägare,  
      (SELECT COUNT(*) FROM bilar) AS totalt_bilar          
  `);
  return rows;
}


// Hämtar bilägare via id
export async function getBilagareById(id) {
  const [rows] = await pool.query("SELECT * FROM `bil ägare` WHERE id = ?", [id]);
  return rows;
}