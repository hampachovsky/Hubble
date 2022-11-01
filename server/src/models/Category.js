import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
        minLength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article',
        },
    ],
});

categorySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.createdAt;
    },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
