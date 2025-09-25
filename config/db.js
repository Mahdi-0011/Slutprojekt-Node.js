// config/db.js
import mysql from 'mysql2/promise';

// funktion för ansluta till databasen
export async function connectDB() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sommar24',   // databas lösenord
    database: 'bilverkstad' // databas namn
  });

  console.log('✅ Lyckades ansluta till databasen');
  return connection; // Returnerar anslutningen
}
