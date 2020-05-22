const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db.sqlite');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

app.get('/', (req, res, next) => {
    db.all(`select * from Strip;`, (err, rows) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send({strips: rows})
        }
    }
)

    res.send('hello world')
});

module.exports = app;
