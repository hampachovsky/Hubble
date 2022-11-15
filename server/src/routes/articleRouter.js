import Router from 'express';
import articleController from '../controllers/articleController.js';
import commentController from '../controllers/commentController.js';
import userExtractor from '../middleware/userExtractor.js';

const router = new Router();

router.get('/all', articleController.getAll);
router.post('/', userExtractor, articleController.create);
router.put('/:id/like', userExtractor, articleController.changeLike);
router.post('/:id/comment', userExtractor, commentController.create);
router.get('/own', userExtractor, articleController.getOwnArticles);
router.get('/liked', userExtractor, articleController.getLikedArticles);
router.get('/:id', articleController.getById);

export default router;
