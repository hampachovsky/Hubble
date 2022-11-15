import Article from '../models/Article.js';
import User from '../models/User.js';
import Category from '../models/Category.js';

const articleController = {
    async getAll(req, res) {
        try {
            let articles = await Article.find().populate({ path: 'author', select: 'username' });
            articles = articles.sort((a, b) => new Date(b.created) - new Date(a.created));
            return res.status(200).json(articles);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take article' });
        }
    },
    async getById(req, res) {
        const { id } = req.params;
        try {
            const article = await Article.findById(id).populate([
                'category',
                { path: 'author', select: 'username' },
            ]);
            if (!article) return res.status(500).json({ error: 'Article not found' });
            return res.status(200).json(article);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take article' });
        }
    },
    async getOwnArticles(req, res) {
        try {
            const userFromToken = req.user;
            const user = await User.findById(userFromToken._id).populate([
                {
                    path: 'articles',
                    populate: {
                        path: 'author',
                        select: 'username',
                    },
                },
            ]);
            if (!user) return res.status(404).json({ error: 'User not found' });
            user.articles = user.articles.sort((a, b) => new Date(b.created) - new Date(a.created));
            return res.status(200).json(user.articles);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take article' });
        }
    },
    async getLikedArticles(req, res) {
        try {
            const userFromToken = req.user;
            const user = await User.findById(userFromToken._id).populate([
                {
                    path: 'likedArticles',
                    populate: {
                        path: 'author',
                        select: 'username',
                    },
                },
            ]);
            if (!user) return res.status(404).json({ error: 'User not found' });
            user.likedArticles = user.likedArticles.sort(
                (a, b) => new Date(b.created) - new Date(a.created),
            );
            return res.status(200).json(user.likedArticles);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take article' });
        }
    },
    async create(req, res) {
        const { body } = req;
        const { user } = req;
        // TODO: change this when new properties of articles appear!!!
        if (!(body.title || body.content || body.categoryId)) {
            // server-side article validation in addition to mongodb validation
            return res.status(400).json({ error: 'Title or content, or category not provided' });
        }
        const categoryToUpdate = await Category.findById(body.categoryId);
        let userWhoAdds;
        try {
            userWhoAdds = await User.findById(user._id);
        } catch (e) {
            res.status(500).json({ error: 'Provided user is not found' });
        }
        if (!userWhoAdds) {
            return res.status(500).json({ error: 'User from token not found' });
        }
        const articleToAdd = {
            // update when schema changes
            title: body.title,
            content: body.content,
            author: userWhoAdds._id,
            tags: body.tags,
            category: body.categoryId,
        };
        let savedArticle;
        try {
            savedArticle = await (
                await new Article({ ...articleToAdd }).save()
            ).populate({
                path: 'author',
                select: 'username',
            });
        } catch (e) {
            return res.status(500).json({ error: 'User from token not found' });
        }
        try {
            await Category.findByIdAndUpdate(body.categoryId, {
                ...categoryToUpdate,
                articles: categoryToUpdate.articles.push(savedArticle._id),
            });
        } catch (e) {
            return res
                .status(500)
                .json({ error: 'Category update while creating article unsuccessfull' });
        }
        try {
            await User.findByIdAndUpdate(userWhoAdds._id, {
                ...userWhoAdds,
                articles: userWhoAdds.articles.push(savedArticle._id),
            });
        } catch (e) {
            return res
                .status(500)
                .json({ error: 'User update while creating article unsuccessfull' });
        }

        return res.status(200).json(savedArticle);
    },
    async changeLike(req, res) {
        if (!req.params.id) return res.status(500).json({ error: 'Id of article not provided' });
        const userFromToken = req.user; // used only to find User from database
        if (!userFromToken) return res.status(401).json({ error: 'Bad token provided' });
        let userWhoLikes;
        try {
            userWhoLikes = await User.findById(userFromToken._id);
        } catch (e) {
            return res.status(500).json({ error: 'User from token not found' });
        }
        let articleToUpdate;
        try {
            articleToUpdate = await Article.findById(req.params.id);
            if (!articleToUpdate) return res.status(404).json({ error: 'Article not found' });
        } catch (e) {
            return res.status(500).json({ error: 'Article to like not found' });
        }

        const { type } = req.body;
        const userWhoLikesObj = userWhoLikes;

        if (type === 'addLike') {
            if (articleToUpdate.likedBy.includes(userWhoLikes._id)) {
                // both ids must be ObjectId
                return res.status(500).json({ error: 'User already liked this article' });
            }
            const likedArticle = {
                ...articleToUpdate._doc,
                likes: articleToUpdate.likes + 1,
                likedBy: articleToUpdate.likedBy.concat(userWhoLikes._id),
            };
            try {
                await User.findByIdAndUpdate(
                    userWhoLikesObj._id,
                    {
                        ...userWhoLikesObj,
                        likedArticles: userWhoLikesObj.likedArticles.push(likedArticle._id),
                    },
                    { new: true },
                );
                const savedArticle = await Article.findByIdAndUpdate(
                    likedArticle._id,
                    { ...likedArticle },
                    { new: true, likedBy: 0 },
                ).populate({ path: 'author', select: ['username', '_id'] });
                return res.status(200).json(savedArticle);
            } catch (e) {
                return res.status(500).json({ error: 'Cannot update user or article' });
            }
        } else if (type === 'removeLike') {
            // removeLike scenario
            if (!articleToUpdate.likedBy.includes(userWhoLikes._id)) {
                // both ids must be ObjectId
                return res.status(500).json({ error: "User haven't liked this article" });
            }
            const likedArticle = {
                ...articleToUpdate._doc,
                likes: articleToUpdate.likes - 1,
                likedBy: articleToUpdate.likedBy.filter(
                    (e) => e.toString() !== userWhoLikes._id.toString(),
                ),
            };
            try {
                const foundedUser = await User.findById(userWhoLikes._id);
                foundedUser.likedArticles = foundedUser.likedArticles.filter(
                    (a) => a._id.toString() !== likedArticle._id.toString(),
                );
                await foundedUser.save();
                const savedArticle = await Article.findByIdAndUpdate(
                    likedArticle._id,
                    { ...likedArticle },
                    { new: true, likedBy: 0 },
                ).populate({ path: 'author', select: ['username', '_id'] });
                return res.status(200).json(savedArticle);
            } catch (e) {
                return res.status(500).json({ error: 'Cannot update user or article' });
            }
        } else {
            return res.status(400).json({ error: 'Incorrect type' });
        }
    },
};

export default articleController;
