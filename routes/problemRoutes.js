import express from 'express';
import { getProblemController, getProblemByIdController } from '../controllers/problemController.js';

const router = express.Router();

router.get('/', getProblemController);          // alla bilproblem
router.get('/:id', getProblemByIdController); // bilproblem via id

export default router;
