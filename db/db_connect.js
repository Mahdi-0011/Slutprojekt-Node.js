/** @format */

// Databasanslutning
import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Laddar .env-filen
dotenv.config();

// Med connection måste alla stå i kö (en anslutning åt gången).
// Med pool kan flera arbeta samtidigt (flera anslutningar redo).
export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Testa anslutning
export async function BilverkstadDb() {
  try {
    const conn = await pool.getConnection();
    console.log("Databas ansluten!"); // Databas ansluten!
    conn.release();
  } catch (err) {
    console.error("Fel vid databasanslutning:", err);
    process.exit(1);
  }
}

// Stäng poolen vid avstängning av servern
export async function closeDB() {
  try {
    await pool.end();
    console.log("Databasanslutning stängd."); // Databasanslutning stängd.
  } catch (err) {
    console.error("Fel vid stängning av databasanslutning:", err);
  }
}
