const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/:search', (req, res) => {
    const myApiKey = process.env.API_KEY;
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=${req.params.search}&limit=10`
    }).then((apiRes) => {
        res.send(apiRes.data);
    }).catch((apiErr) => {
        console.error(apiErr);
    })
});

module.exports = router;