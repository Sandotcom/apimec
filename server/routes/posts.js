import express from 'express';
import { createPost, getEjemplos } from '../controllers/ejemplos.js';

const router = express.Router();

router.post('/post', createPost);
router.get('/ejemplo', getEjemplos)

export default router;