// server.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is running');
});