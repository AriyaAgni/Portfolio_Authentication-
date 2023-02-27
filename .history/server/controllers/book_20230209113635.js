let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Book = require('../models/books');

//we want to display the bookList
module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
           //console.log(BookList);
            res.render('book/list', { title: 'Books', BookList: bookList });
        }
    });
}
module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add',{title:'Add Book'})
}

module.exports.processAddPage = 