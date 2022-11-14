import Router from 'express';
import commentController from '../controllers/commentController.js';
import userExtractor from '../middleware/userExtractor.js';

const router = new Router();

router.get('/all', commentController.getAll);
router.get('/:id', commentController.getById);
router.put('/:id/like', userExtractor, commentController.changeLike);
router.get('/getBy/:id', commentController.getByArticle);

export default router;
