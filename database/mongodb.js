import mongoose from "mongoose";
import {DB_URI, NODE_ENV} from "../config/env.js";

if(!DB_URI) {
    throw new Error("MongoDB URI is missing");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`connected to database in ${NODE_ENV} mode`);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

export default connectToDatabase;