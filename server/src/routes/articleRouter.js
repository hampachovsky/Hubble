import Router from 'express';
import articleController from '../controllers/articleController.js';
import userExtractor from '../middleware/userExtractor.js';

const router = new Router();

router.get('/all', articleController.getAll);
router.get('/:id', articleController.getById);
router.post('/', userExtractor, articleController.create);
router.put('/:id/like', userExtractor, articleController.changeLike);

export default router;
