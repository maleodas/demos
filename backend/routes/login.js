const express = require('express');
const router = express.Router();
const login = require('../models/login');

router.post('/login', async (req, res) => {
    try {
        const credentials = req.body
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