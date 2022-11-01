import mongoose from 'mongoose';
import Category from '../models/Category.js';
import Comment from '../models/Comment.js';
import Article from '../models/Article.js';
import User from '../models/User.js';
import { MONGODB_URI } from '../config/index.js';

const drop = async () => {
    await mongoose
        .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(`connected to MongoDB at ${MONGODB_URI}`);
        })
        .catch((error) => {
            console.log('error connection to MongoDB:', error.message);
        });
    await Promise.all([
        Category.deleteMany({}),
        User.deleteMany({}),
        Comment.deleteMany({}),
        Article.deleteMany({}),
    ]);
};

drop();
