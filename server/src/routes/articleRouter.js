import Router from 'express';
import articleController from '../controllers/authController.js';

const router = new Router();

router.get('/all', articleController.getAll);

export default router;
