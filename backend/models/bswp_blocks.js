const mongoose = require('mongoose');

const bswpBlocks = new mongoose.Schema({
    height: String,
    confirmed : String,
    total_sent: String,
    transaction: String
});


const bswpBlocksData = mongoose.model('bswpBlocksData', bswpBlocks);
module.exports = bswpBlocksData;