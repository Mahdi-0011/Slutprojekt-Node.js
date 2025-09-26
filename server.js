// server.js
import express from 'express';
import { connectDB } from './config/db.js';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); // Tillåt JSON i requests

// GET /bilar
// Hämta alla bilar från databasen
// app.get('/bilar', async (req, res) => {
//   try {
//     const db = await connectDB();                    // Koppla till databasen
//     const [rows] = await db.query('SELECT * FROM bilar'); // Hämta alla rader
//     res.json(rows);                                  // Skicka tillbaka resultatet
//     await db.end();                                  // Stäng anslutningen
//   } catch (err) {
//     res.status(500).json({ error: err.message });    // Felhantering
//   }
// });

//GET /servis-arende 
// Hämta alla servisärenden från databasen
app.get('/servis-arende', async (req, res) => {
  try {
    const db = await connectDB();                          
    // Tabellen har namn med mellanslag, därför backticks
    const [rows] = await db.query('SELECT * FROM `servis ärende`'); 
    res.json(rows);                                  
    await db.end();                                  
  } catch (err) {
    res.status(500).json({ error: err.message });    
  }
});

//Hämta servisarende med specifikt id
app.get('/servis-arende/:id', async (req, res) => {
  try {
  const db = await connectDB();
  const id = req.params.id; // Hämta id från URL:en
  const [rows] = await db.query('SELECT * FROM `servis ärende` WHERE id = ?', [id]);
  res.json(rows); // Skicka tillbaka resultatet
  await db.end(); // Stäng anslutningen
  } catch (err) {
    res.status(500).json({ error: err.message });    
  }
});

// Hämta metadata för servisärende / antal bilar per ägare
app.get('/metadata', async (req, res) => {
  try {
    const db = await connectDB();

    const query = `
      SELECT \`bil ägare\`.\`förnamn\`, \`bil ägare\`.\`efternamn\`, COUNT(bilar.\`reg(pk)\`) AS antal_bilar
      FROM \`bil ägare\`
      LEFT JOIN bilar ON bilar.\`bil ägare id(fk)\` = \`bil ägare\`.id
      GROUP BY \`bil ägare\`.id, \`bil ägare\`.\`förnamn\`, \`bil ägare\`.\`efternamn\`
    `;

    const [rows] = await db.query(query);

    res.json(rows); // skicka tillbaka JSON
    await db.end(); // stäng anslutning
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// START SERVER
app.listen(port, () => console.log(`Server körs på http://localhost:${port}`));
