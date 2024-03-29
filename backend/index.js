const express = require('express');
const app = express();
const bswp = require('./routes/bswp');
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





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log("nodejs")