import Comment from '../models/Comment.js';
import Article from '../models/Article.js';
import User from '../models/User.js';

const commentController = {
    async getAll(req, res) {
        try {
            const comments = await Comment.find();
            return res.status(200).json(comments);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take comment' });
        }
    },
    async getById(req, res) {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) res.status(500).json({ error: 'No such comment in database' });
            return res.status(200).json(comment);
        } catch (e) {
            return res.status(403).json({ error: "Can't find comment" });
        }
    },
    async create(req, res) {
        const { body } = req;
        if (!req.params.id) return res.status(500).json({ error: 'Id of article not provided' });
        const userFromToken = req.user;
        if (!userFromToken) return res.status(401).json({ error: 'Bad token provided' });
        if (!body.content) return res.status(400).json({ error: 'No content provided' });

        let userWhoComments;
        let articleToComment;
        try {
            userWhoComments = await User.findById(userFromToken._id);
            articleToComment = await Article.findById(req.params.id);
            if (!userWhoComments) res.status(404).json({ error: 'User from token not found' });
            if (!articleToComment) return res.status(404).json({ error: 'Article not found' });
        } catch (e) {
            return res.status(500).json({ error: 'User or article not found' });
        }
        const commentToSave = {
            content: body.content,
            author: userWhoComments._id,
            article: articleToComment._id,
        };
        let comment;
        try {
            comment = await new Comment({ ...commentToSave }).save();
        } catch (e) {
            return res.json({ error: 'Comment cannot be saved' });
        }
        userWhoComments.comments.push(comment._id);
        articleToComment.comments.push(comment._id);
        await userWhoComments.save();
        await articleToComment.save();
        return res.status(200).json(articleToComment);
    },
    // eslint-disable-next-line consistent-return
    async changeLike(req, res) {
        if (!req.params.id) return res.status(500).json({ error: 'Id of comment not provided' });
        const userFromToken = req.user;
        if (!userFromToken) return res.status(401).json({ error: 'Bad token provided' });
        let userWhoLikes;
        let commentToUpdate;
        try {
            userWhoLikes = await User.findById(userFromToken._id);
            commentToUpdate = await Comment.findById(req.params.id);
            if (!commentToUpdate) return res.status(404).json({ error: 'Comment not found' });
            if (!userWhoLikes) return res.status(404).json({ error: 'User not found' });
        } catch (e) {
            return res.status(500).json({ error: 'User from token not found' });
        }

        const { type } = req.body;

        if (type === 'addLike') {
            if (commentToUpdate.likedBy.find((e) => e.toString() === userWhoLikes._id.toString())) {
                return res.status(500).json({ error: 'User already liked this article' });
            }
            try {
                userWhoLikes.likedComments.push(commentToUpdate._id);
                commentToUpdate.likes += 1;
                commentToUpdate.likedBy = commentToUpdate.likedBy.concat(userWhoLikes._id);
                await commentToUpdate.save();
                await userWhoLikes.save();
                return res.status(200).json(commentToUpdate);
            } catch (e) {
                console.log(e);
                return res.status(500).json({ error: 'Cannot update user or comment' });
            }
        } else if (type === 'removeLike') {
            if (
                !commentToUpdate.likedBy.find((e) => e.toString() === userWhoLikes._id.toString())
            ) {
                // both ids must be ObjectId
                return res.status(500).json({ error: "User haven't liked this comment" });
            }
            /*       const likedComment = {
                ...commentToUpdate,
                likes: commentToUpdate.likes - 1,
                likedBy: commentToUpdate.likedBy.filter(
                    (e) => e.toString() !== userWhoLikes._id.toString(),
                ),
            }; */
            try {
                userWhoLikes.likedComments = userWhoLikes.likedComments.filter(
                    (a) => a._id.toString() !== commentToUpdate._id.toString(),
                );
                commentToUpdate.likes -= 1;
                commentToUpdate.likedBy = commentToUpdate.likedBy.filter(
                    (e) => e.toString() !== userWhoLikes._id.toString(),
                );
                await commentToUpdate.save();
                await userWhoLikes.save();

                return res.status(200).json(commentToUpdate);
            } catch (e) {
                console.log(e);
                return res.status(500).json({ error: 'Cannot update user or comment' });
            }
        } else {
            return res.status(400).json({ error: 'Incorrect type' });
        }
    },
};

export default commentController;
