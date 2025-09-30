/** @format */

import express from "express";
import dotenv from "dotenv";
import { BilverkstadDb, closeDB } from "./db/db_connect.js";

// Importera alla routes
import bilarRoutes from "./routes/bilarRoutes.js";
import bilagareRoutes from "./routes/bilagareRoutes.js";
import verkstadRoutes from "./routes/verkstadRoutes.js";
import servisRoutes from "./routes/servisRoutes.js";
import problemRoutes from "./routes/problemRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware för JSON
app.use(express.json());

// Koppla routes till API
app.use("/api/bilar", bilarRoutes);
app.use("/api/bilagare", bilagareRoutes);
app.use("/api/verkstad", verkstadRoutes);
app.use("/api/servis", servisRoutes);
app.use("/api/bilproblem", problemRoutes);

// Starta server
async function start() {
  await BilverkstadDb(); // Kontrollera DB-anslutning först
  const server = app.listen(PORT, () => {
    console.log(`Server körs på http://localhost:${PORT}`);
  });

// graceful shutdown
async function gracefulShutdown() {
  console.log("Stänger ner server...");
  server.close(async () => {
    await closeDB(); // Stäng databasanslutning
    console.log("Server nedstängd.");
    process.exit(0);
  });
}
  process.on("SIGINT", gracefulShutdown);
  process.on("SIGTERM", gracefulShutdown);
}

start();