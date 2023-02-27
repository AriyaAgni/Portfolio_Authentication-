let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Book = require('../models/books');

//we want to display the bookList
module.exports.displayBookList = 