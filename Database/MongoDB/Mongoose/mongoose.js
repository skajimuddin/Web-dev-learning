const mongoose = require('mongoose');

main()
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/SKAZIM');
}

// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// Model
const User = mongoose.model('User', courseSchema);
// Note: Mongoose automatically pluralizes the model name 'User' to 'users'
// and creates a collection called 'users' in the MongoDB database.

// Create a document
const azim = new User({
    name: 'Azim',
    email: 'hello@azim.com',
    age: 20,
});

// Save the document
azim.save();

// Docs >> https://mongoosejs.com/