import Router from 'express';
import commentController from '../controllers/commentController.js';

const router = new Router();

router.get('/all', commentController.getAll);

export default router;
