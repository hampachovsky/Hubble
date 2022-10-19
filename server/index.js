import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URI, PORT } from './src/config/index.js';
import tokenExtractor from './src/middleware/tokenExtractor.js';
import unknownEndpoint from './src/middleware/unknowEndpoint.js';

// basic configuration
const app = express();
app.use(express.json());
app.use(cors());
app.use(tokenExtractor);

// if routes not found
app.use(unknownEndpoint);

async function startApp() {
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}!`);
        });
    } catch (e) {
        console.error(e);
    }
}

startApp();
