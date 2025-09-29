import { getAllProblem, getProblemById } from "../models/problemModel.js";

export async function getProblemController(req, res) {
  try {
    const rows = await getAllProblem();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av bilproblem" });
  }
}

export async function getProblemByIdController(req, res) {
  const id = req.params.id;
  try {
    const problem = await getProblemById(id);
    if (problem) {
      res.json(problem);
    } else {
      res.status(404).json({ message: "Bilproblem hittades inte" });
    }
  } catch (err) {
    res.status(500).json({ message: "Fel vid hämtning av bilproblem" });
  }
}