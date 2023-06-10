//required mongoose
const mongoose = require('mongoose');

// creates a specified url to store book details
var url ='mongodb://localhost:27017/booksDB';

//establishing connections
const connection = mongoose.createConnection(url);

module.exports = connection;