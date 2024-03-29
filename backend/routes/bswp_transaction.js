const express = require('express');
const router = express.Router();
const transactions = require('../models/bswp_transactions');

router.get('/bswp/tranactions', async (req,res)=>{
    try{
        const bswpTransaction = await transactions.find();
        
        if(!bswpTransaction){
            res.status(404).json("not found");
        }
        else{
            res.status(200).json(bswpTransaction);
        }
    }
    catch(error){
        console.error("error while fetching data", error);
        res.status(500).json("internal server error");
    }
});

module.exports = router;