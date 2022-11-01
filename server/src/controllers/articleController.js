import Article from '../models/Article.js';

const articleController = {
    async getAll(req, res) {
        try {
            const articles = await Article.find().populate('category');
            return res.status(200).json(articles);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take article' });
        }
    },
};

export default articleController;
