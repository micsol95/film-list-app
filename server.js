// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest');

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/router'));

// app.use(express.static(__dirname+'/client'));

app.get('/', function(req, res){
  res.send('Please use /api/films');
});

// Start server
app.listen(3000);
console.log('API is running on port 3000');