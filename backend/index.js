const express = require('express');
const app = express();
const bswp = require('./routes/bswp');
const bswpBlocks = require('./routes/bswp_blocks');
const bswpTransaction = require('./routes/bswp_transaction');
const dashboard = require('./routes/dashbord');
let bodyParser = require('body-parser');

app.get('/', (req, res) => {
    res.send('Hello World!')
})


try {
    let db = require('./config/db');
    db.connect(function () {
    });
} catch (err) {
    console.info('Connection fail to db with err %s', err.message);
}


app.use('/', bswp);
app.use('/', bswpBlocks);
app.use('/', bswpTransaction);
app.use('/dasboard', dashboard);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log("nodejs")