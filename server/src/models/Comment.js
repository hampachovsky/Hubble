import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 2,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
    },
    created: {
        type: Date,
        default: Date.now,
        immutable: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    likedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
});

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        // delete returnedObject.likedBy
    },
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
