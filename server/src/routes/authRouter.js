import Router from 'express';
import authController from '../controllers/authController.js';
import userExtractor from '../middleware/userExtractor.js';

const router = new Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', userExtractor, authController.getMe);
router.get('/all', authController.getAll);

export default router;
