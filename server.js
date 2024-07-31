import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const app = express();

try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT, ()=>{
        console.log("Listening on port: ", process.env.PORT);
    })
} catch (err) {
    console.log(err);
}