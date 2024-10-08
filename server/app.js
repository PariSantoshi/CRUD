var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');


//Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb+srv://parisantoshix:fSFejMA3ZGPxlXgZ@cluster0.sd8waxd.mongodb.net/CrudDB?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Start');
    })
    .catch((err) => {
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// Required aplication specific custom router module
var itemRouter = require('./src/routes/itemRouter');

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

// Start the server
app.listen(port, function() {
    console.log('Server is running on Port: ', port);
});
