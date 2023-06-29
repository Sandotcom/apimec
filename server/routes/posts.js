import express from 'express';
import { createPost, getEjemplos, getRecords } from '../controllers/ejemplos.js';

const router = express.Router();

router.post('/post', createPost);
router.get('/ejemplo', getEjemplos)
router.post('/ejemplo', getRecords)

export default router;