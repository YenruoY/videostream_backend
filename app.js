import dotenv from "dotenv";
import express from "express";
import connectDB from "./dbConnection.js";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config({
    path: "./.env"
})

const app = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // credentials: true
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

app.use(express.static("public"))

app.use(cookieParser())

connectDB()
    .then (() => {

        app.on("error", (error) => {
            console.log("Error : ", error);
            throw error
        })

        app.listen(PORT, () => {
            console.log("Server is running on PORT : ", PORT);
        })
    })
    .catch ((err) => {
        console.log("Error connection to Database!!", err);
    })




/////////////////////////////////////////////////////////////////////
// First approach
//
// const MONGO_HOST = process.env.MONGO_HOST;
// const MONGO_PORT = process.env.MONGO_PORT;
//
// const MONGODB_URI = "mongodb://" + MONGO_HOST + ":" + MONGO_PORT + "/" + DB_NAME + '/fdb2?directConnection=true';
//
// console.log("Mongo url: ", MONGODB_URI )
//
//
// // starts with ; for cleaning purpose in case of iffy
// ;( async() => {              // iffy function; execute directly
//     try {
//         await mongoose.connect(`${MONGODB_URI}`)
//         app.on("error", (error) => {
//             console.log("Error : ", error);
//             throw error;
//         })
//
//         app.listen(PORT, () => {
//             console.log(`Application is running on PORT : ${PORT}`)
//         })
//
//     } catch (error) {
//         console.log("Error connecting to database; ", error)
//     }
// })()
//
// app.get("/", (req, res) => {
//     res.send("Hello world!");
// })
//
//
//////////////////////////////////////////////////////
