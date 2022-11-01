import Comment from '../models/Comment.js';

const commentController = {
    async getAll(req, res) {
        try {

            const comments = await Comment.find();
            return res.status(200).json(comments);

            const users = await Comment.find();
            return res.status(200).json(users);

        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take comment' });
        }
    },
};

export default commentController;
