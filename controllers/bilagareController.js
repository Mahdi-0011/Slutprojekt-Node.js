import { getAllBilagare, getMetaBilagare, getBilagareById } from "../models/bilagareModel.js";


// Hämtar alla bilägare
export async function getBilagareController(req, res) {
  try {
    const rows = await getAllBilagare();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av bilägare" });
  }
}


// Hämtar meta-data för bilägare och antal bilar per ägare
export async function getMetaBilagareController(req, res) {
  try {
    const rows = await getMetaBilagare();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av meta-data" });
  }
}

// Hämtar bilägare via id
export async function getBilagareByIdController(req, res) {
  try {
    const id = req.params.id;
    const rows = await getBilagareById(id);  // Anropar modellen
    res.json(rows[0]);  // Returnerar första objektet
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av bilägare" });
  }}