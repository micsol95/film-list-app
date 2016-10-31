// Dependencies
const express = require('express');
const router = express.Router();

// Models
let Film = require('../models/film');

// Routes
Film.methods(['get', 'put', 'post', 'delete']);
Film.register(router, '/films');

// Return router
module.exports = router;