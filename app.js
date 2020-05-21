const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const jsonParser = bodyParser.json();


const PORT = process.env.PORT || 4001;

app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(PORT);
