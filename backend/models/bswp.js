const mongoose = require('mongoose');

const bswp = new mongoose.Schema({
    existingAmount: String,
    mintedAmount: String,
    burntAmount: String,
    address: String,
    unspentTXOs: String,
    spentTXOs: String,
    price: String,
    marketcap: String
});

const bswpData = mongoose.model('bswp', bswp);
module.exports = bswpData;