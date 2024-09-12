import mongoose from 'mongoose';
import { database } from './config';

if (!database.url) {
    throw new Error('Could not find mongodb URI');
}

mongoose
    .connect(database.url)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
