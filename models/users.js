
const mongoose = require("mongoose")

const usersCollection = 'users';

const usersSchema = new mongoose.Schema({
    user: {
        type: String, 
        require: true, 
    },
    pass: {
        type: String, 
        require: true, 
    },
    adress: {
        type: String, 
        require: true, 
    },
})

const users = mongoose.model(usersCollection, usersSchema);

module.exports =  users
