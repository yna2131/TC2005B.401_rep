const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.unrlencoded({extended: false}));


// Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use('/lab03', (request, response, next) => {
    response.send('You are at HOME');
});