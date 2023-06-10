const mongoose = require('mongoose');
const db = require('../config/db');

// Book info to be stored with columns
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        default:"----"
    },
    isbn:{
      type:Number,
    },
    author:{
        type:String,
        default:"----"
    }
});
//creating models
const bookmodel = db.model('books',bookSchema);

module.exports = bookmodel;