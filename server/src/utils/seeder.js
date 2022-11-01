/* eslint-disable no-plusplus */
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
// eslint-disable-next-line import/no-unresolved
import faker from 'faker';
import Category from '../models/Category.js';
import Comment from '../models/Comment.js';
import Article from '../models/Article.js';
import User from '../models/User.js';
import { MONGODB_URI } from '../config/index.js';
import random from './random.js';

const categoryNames = [
    'IT',
    'Sport',
    'Business',
    'Politics',
    'Crypto',
    'Music',
    'Films and Serial',
];

const getTags = (tags) => {
    const tagCount = random(1, 4);
    const tagsToReturn = [];
    for (let i = 0; i < tagCount; i++) {
        const rand = random(0, tags.length - 1);
        tagsToReturn.push(tags[rand]);
    }
    return tagsToReturn;
};

const categorySeeder = async () => {
    await Promise.all([Category.deleteMany({})]);
    for (let i = 0; i < categoryNames.length; i++) {
        const categoryToAdd = {
            categoryName: categoryNames[i],
        };
        Category.create(categoryToAdd);
    }
};

const seeder = async () => {
    await Promise.all([Article.deleteMany({}), User.deleteMany({}), Comment.deleteMany({})]);

    const articleAuthors = [];
    const categories = await Category.find();

    const articleTags = []; // gets inserted with random tags
    for (let i = 0; i < 20; i++) {
        articleTags.push(faker.lorem.word(random(3, 8)));
    }
    const articlesToInsert = [];
    for (let i = 0; i < 12; i++) {
        // fills with authors' ids
        articleAuthors.push(new mongoose.Types.ObjectId());
    }
    for (let i = 0; i < 120; i++) {
        // creates articles
        const randCategoryNumber = random(0, categories.length - 1);
        const objToAdd = {
            _id: new mongoose.Types.ObjectId(),
            title: faker.lorem.words(random(2, 6)),
            content: `<p>${faker.lorem.paragraphs()}</p>`,
            author: articleAuthors[random(0, articleAuthors.length - 3)], // -3 cuz 2 custom users
            tags: getTags(articleTags),
            category: categories[randCategoryNumber].id,
        };
        const article = new Article({ ...objToAdd });
        categories[randCategoryNumber].articles.push(article._id);
        // eslint-disable-next-line no-await-in-loop
        await categories[randCategoryNumber].save();
        articlesToInsert.push(article);
    }

    const authorsToInsert = [];
    for (let i = 0; i < articleAuthors.length - 1; i++) {
        const password = faker.lorem.word(random(4, 10));
        const passwordHash = bcrypt.hashSync(password, 10);
        const articles = [];
        for (let j = 0; j < 10; j++) {
            // fills users with articles
            articles.push(articlesToInsert[i * 10 + j]);
        }
        const objToAdd = {
            username: faker.name.findName(),
            password: passwordHash,
            articles,
            likedArticles: [],
        };
        authorsToInsert.push({ ...objToAdd, _id: articleAuthors[i] });
    }
    const adminHash = bcrypt.hashSync('admin', 10);
    const defaultUserHash = bcrypt.hashSync('defaultUser', 10);
    const admin = {
        username: 'admin',
        password: adminHash,
        role: 'admin',
    };
    const defaultUser = {
        username: 'defaultUser',
        password: defaultUserHash,
    };
    authorsToInsert.push(admin);
    authorsToInsert.push(defaultUser);

    await Promise.all([
        Article.insertMany(articlesToInsert, (error) => {
            if (error) console.log(error);
        }),
        User.insertMany(authorsToInsert, (error) => {
            if (error) console.log(error);
        }),
    ]);
    console.log('seeded');
};

const connect = async () => {
    await mongoose
        .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(`connected to MongoDB at ${MONGODB_URI}`);
        })
        .catch((error) => {
            console.log(error);
        });
};
const wrapper = async () => {
    await connect();
    await categorySeeder();
    await seeder();
    console.log('database is made of seed');
    // await mongoose.connection.close();
};

wrapper();
