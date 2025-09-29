import { getAllServis, getServisById, getMetaServis } from "../models/servisModel.js";

export async function getServisController(req, res) {
  try {
    const rows = await getAllServis();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av servis" });
  }
}

// Hämtar servisärende via id
export async function getServisByIdController(req, res) {
  try {
    const id = req.params.id;
    const rows = await getServisById(id);  // Anropar modellen
    if (rows.length === 0) {
      return res.status(404).json({ message: "Servisärende hittades inte" });
    } else {
      res.json(rows[0]); // Returnerar det första (och enda) objektet
    }
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av servisärende" });
  }
}


// Hämtar meta-data för servisärende
export async function getMetaServisController(req, res) {
  try {
    const rows = await getMetaServis();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av meta-data" });
  }
}