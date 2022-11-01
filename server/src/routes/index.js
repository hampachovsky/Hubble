import Router from 'express';
import authRouter from './authRouter.js';
import articleRouter from './articleRouter.js';
import categoryRouter from './categoryRouter.js';
import commentRouter from './commentRouter.js';

const router = new Router();

router.use('/auth', authRouter);
router.use('/articles', articleRouter);
router.use('/category', categoryRouter);
router.use('/comments', commentRouter);

export default router;
