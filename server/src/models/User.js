import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, minLength: 3, maxLength: 32, unique: true },
    password: { type: String, required: true, minLength: 4, maxLength: 64 },
    created: {
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
    likedArticles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article',
        },
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    likedComments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject.__v;
        delete returnedObject.password;
        delete returnedObject.created;
    },
});

const User = mongoose.model('User', userSchema);

export default User;
