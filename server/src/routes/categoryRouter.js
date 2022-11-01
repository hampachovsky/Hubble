import Router from 'express';
import categoryController from '../controllers/categoryController.js';

const router = new Router();

router.get('/all', categoryController.getAll);

export default router;
