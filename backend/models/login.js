const mongoose = require('mongoose');

const login = new mongoose.Schema({
    username: String,
    password: String
});

const loginData = mongoose.model('loginData', login);
module.exports = loginData;