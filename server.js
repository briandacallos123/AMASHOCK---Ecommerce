import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import authRoute from './route/authRoute.js'

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRoute)

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT, ()=>{
        console.log("Listening on port: ", process.env.PORT);
    })
} catch (err) {
    console.log(err);
}