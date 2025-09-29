import express from 'express';
import { getVerkstadController,getVerkstadByIdController } from '../controllers/verkstadController.js';

const router = express.Router();

router.get('/', getVerkstadController);         // alla verkstäder
router.get('/:id', getVerkstadByIdController); // verkstad via id

export default router;
