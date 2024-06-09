import express from 'express';
const app = express();
import connectionDb from './Config/Db.js';
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';

// routes
import AuthRoute from './Route/AuthRoute.js'
const port = process.env.PORT || 4000

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable CORS with credentials
    // optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

// middlewares
connectionDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions))
app.use('/user', AuthRoute)

// middleware error handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    const message = res.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})