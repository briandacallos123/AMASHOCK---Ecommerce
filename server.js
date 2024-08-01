import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import authRoute from './route/authRoute.js'
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import path from 'path';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middleware/authMiddleware.js';
import userRoute from './route/userRoute.js'

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser())

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user',authMiddleware, userRoute)

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT, ()=>{

        console.log("Listening on port: ", process.env.PORT);
    })
} catch (err) {
    console.log(err);
}