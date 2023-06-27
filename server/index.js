import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/', postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'apimec' })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((e) => console.log(e.message));