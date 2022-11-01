import Router from 'express';
import articleController from '../controllers/articleController.js';

const router = new Router();

router.get('/all', articleController.getAll);

export default router;
