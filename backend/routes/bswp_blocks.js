const express = require('express');
const router = express.Router();
const bswpBlocks = require('../models/bswp_blocks');

router.get('/bswp/blocks', async(req,res)=>{
    try{
        const blocksData = await bswpBlocks.find();

        if(!blocksData){
            res.status(404).json("not found");
        }
        else{
            res.status(200).json(blocksData);
        }
    }
    catch{
        console.error("error while fetching data", error);
        res.status(500).json("internal server error");
    }
});

module.exports = router;