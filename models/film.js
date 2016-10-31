// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
let filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Date
  },
  format: {
    type: String,
    enum: ['VHS', 'DVD', 'Blu-Ray']
  },
  actors: [String]
});

// Return model
module.exports = restful.model('Films', filmSchema);