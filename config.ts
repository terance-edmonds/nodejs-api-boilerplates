import dotenv from 'dotenv';
dotenv.config();

export const { port, database } = {
    port: process.env.PORT || 8080,
    database: {
        url: process.env.MONGO_URI
    }
};
