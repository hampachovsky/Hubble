import Category from '../models/Category.js';

const categoryController = {
    async getAll(req, res) {
        try {
            const users = await Category.find();
            return res.status(200).json(users);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take category' });
        }
    },
};

export default categoryController;
