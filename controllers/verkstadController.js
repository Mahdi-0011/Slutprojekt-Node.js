import { getAllVerkstad,getVerkstadById } from "../models/verkstadModel.js";

export async function getVerkstadController(req, res) {
  try {
    const rows = await getAllVerkstad();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av verkstad" });
  }
}

export async function getVerkstadByIdController(req, res) {
  const id = req.params.id;
  try {
    const verkstad = await getVerkstadById(id);
    if (verkstad) {
      res.json(verkstad);
    } else {
      res.status(404).json({ message: "Verkstad hittades inte" });
    }
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av verkstad" });
  }
}