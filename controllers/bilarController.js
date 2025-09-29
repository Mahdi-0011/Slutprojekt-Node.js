import { getAllBilar, getBilarByMarke, getBilarById } from "../models/bilarModel.js";

export async function getBilarController(req, res) {
  try {
    const rows = await getAllBilar();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av bilar" });
  }
}

export async function getBilarByMarkeController(req, res) {
  try {
    const marke = req.query.marke;
    const rows = await getBilarByMarke(marke);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid filtrering av bilar" });
  }
}

// Hämtar bil via id (reg)
export async function getBilarByIdController(req, res) {
  try {
    const id = req.params.id;
    const rows = await getBilarById(id);  // Anropar modellen

    if (rows.length === 0) {
      return res.status(404).json({ message: "Bil hittades inte" });
    }
    res.json(rows[0]);  // Returnerar första objektet
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av bil" });
  }}