import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";


dotenv.config({
    path: "./.env"
})


/////////////////////////////////////////////////////////////////////
// Second approach
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

const MONGODB_URI = "mongodb://" + MONGO_HOST + ":" + MONGO_PORT + "/" + DB_NAME + '/fdb2?directConnection=true';

console.log("Mongodb URI: ", MONGODB_URI )

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(MONGODB_URI);
        console.log(`\n Mongodb connected!! DB Host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error : ", error);
        process.exit(1)         // process exit code
    }
}

export default connectDB;
