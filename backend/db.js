//for importing from .env
require('dotenv').config();

const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://adminTaqi:vWpEpb0rAsnydFyq@cluster0.whexhwr.mongodb.net/");

//creating a Schema for users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

//creating a model from the schema 
const User = mongoose.model('User', userSchema);

//creating bank related schema 
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,//reference to User model
        ref: 'User',
        required: true
    }, balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
};