import Router from 'express';
import categoryController from '../controllers/categoryController.js';

const router = new Router();

router.get('/all', categoryController.getAll);
router.post('/', categoryController.create);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);


export default router;
