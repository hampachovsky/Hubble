import Category from '../models/Category.js';

const categoryController = {
    async getAll(req, res) {
        try {
<<<<<<< category
            const category = await Category.find();
            return res.status(200).json(category);
=======
            const users = await Category.find();
            return res.status(200).json(users);

        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: 'failed  take category' });
        }
    },
<<<<<<< category
    async create(req, res) {
        try {
            const { categoryName } = req.body;

            if (!categoryName) {
                return res.status(400).json({ error: 'Category name not provided' });
            }
            const candidate = await Category.findOne({ categoryName });
            if (candidate) return res.status(409).json({ error: 'Category already exist' });
            const categoryToAdd = {
                categoryName,
            };
            const category = await Category.create(categoryToAdd);
            return res.status(200).json(category);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed create category' });
        }
    },
    async delete(req, res) {
        try {
            const categoryId = req.params.id;
            if (!categoryId) return res.status(400).json({ error: 'Category id not provided' });
            await Category.findByIdAndRemove(categoryId);
            return res.status(200).json(null);
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: 'failed create event' });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const categoryName = req.body;
            if (!id) {
                res.status(400).json({ error: 'Id missed' });
            }
            const updatedCategory = await Category.findByIdAndUpdate(id, categoryName, {
                new: true,
            });
            return res.status(200).json(updatedCategory);
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: 'Update category error' });
        }
    },
=======
>>>>>>> main
};

export default categoryController;
