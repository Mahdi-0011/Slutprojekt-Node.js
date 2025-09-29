import express from 'express';
import { getBilarController, getBilarByMarkeController, getBilarByIdController } from '../controllers/bilarController.js';

const router = express.Router();

router.get('/', getBilarController);           // alla bilar
router.get('/marke', getBilarByMarkeController); // delmängd av bilar via märke
router.get('/:id', getBilarByIdController); // en bil via id


export default router;
