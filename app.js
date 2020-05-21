const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const jsonParser = bodyParser.json();


const PORT = process.env.PORT || 4001;

// todo https://www.youtube.com/watch?v=7ITfaw7BRKk&feature=youtu.be


app.get('/', (req,res) => {
    res.send('hello world')
})

app.listen(PORT);
