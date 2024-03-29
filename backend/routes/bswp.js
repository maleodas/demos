const express = require('express');
const router = express.Router();
const bswp = require('../models/bswp');

router.get('/bswp', async (req, res) => {
    try {
        const bswpData = await bswp.find();

        if (!bswpData) {
            res.status(404).json({ message: "Data not found" });
        } else {
            res.status(200).json(bswpData);
        }
    } catch (error) {
        console.error("Error while fetching data", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
