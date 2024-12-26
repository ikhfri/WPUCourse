import mongoose from "mongoose";

import { DATABASE_URL } from "./env";

const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName: "wpucourse",
        });
        return Promise.resolve("Database connected");
    } catch (error) {
        return Promise.reject(error);
    }
};


export default connect