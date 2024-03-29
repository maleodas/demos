const express = require('express');
const router = express.Router();
const { market, trade } = require('../models/dashboard');


router.get('/market', async(req,res)=>{
    try{
        const marketData = await market.find();

        if (!marketData) {
            res.status(404).json({ message: "Data not found" });
        } else {
            res.status(200).json(marketData);
        }
    }
    catch (error) {
        console.error("Error while fetching data", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get('/trade', async(req,res)=>{
    try{
        const tradeData = await trade.find();

        if (!tradeData) {
            res.status(404).json({ message: "Data not found" });
        } else {
            res.status(200).json(tradeData);
        }
    }
    catch (error) {
        console.error("Error while fetching data", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


module.exports = router;