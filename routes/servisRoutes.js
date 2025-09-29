import express from 'express';
import { getServisController, getServisByIdController, getMetaServisController } from '../controllers/servisController.js';

const router = express.Router();

router.get('/', getServisController);           // alla servisärenden
router.get('/meta', getMetaServisController); // meta-data för servisärenden
router.get('/:id', getServisByIdController); // ett servisärende via id

export default router;
