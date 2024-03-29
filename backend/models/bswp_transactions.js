const mongoose = require('mongoose');

const bswpTransaction = new mongoose.Schema({
    currency: String,
    type: String,
    amount: String,
    confirmed: String,
    height: String
});

const bswpTransactions = new mongoose.model('bswpTransactions', bswpTransaction);
module.exports = bswpTransactions;