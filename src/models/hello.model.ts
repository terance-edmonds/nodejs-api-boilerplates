import mongoose from 'mongoose';

const helloSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Hello = mongoose.model('hello', helloSchema);
export default Hello;
