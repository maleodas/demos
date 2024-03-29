const mongoose = require('mongoose');

const dashboardMarkets = new mongoose.Schema({
    currency: String,
    Price: String,
    trades: String
});

const dashboardTrade = new mongoose.Schema({
    currency: String,
    Price: String,
    trades: String
});

const market = new mongoose.model('market', dashboardMarkets);
const trade = new mongoose.model('trade', dashboardTrade);

module.exports = {
    market,
    trade
};