import express from 'express';
import { getBilagareController, getMetaBilagareController, getBilagareByIdController } from '../controllers/bilagareController.js';

const router = express.Router();

router.get('/', getBilagareController);        // alla bilägare
router.get('/meta', getMetaBilagareController); // meta-data för bilägare
router.get('/:id', getBilagareByIdController); // bilägare via id


export default router;
