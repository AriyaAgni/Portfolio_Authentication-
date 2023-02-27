let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//connect to our books model
let Book = require('../models/books');
//GET ROUTE for the book list page -READ OPERATION
router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if (err) {
            return console.error(err);
        }
        else {
           //console.log(BookList);
            res.render('book/list', { title: 'Books', BookList: bookList });
        }
    });
});

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', (req, res, next) => {
    res.render('book/add', { title: 'Add book'});
});

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add', (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published":req.body
    })
});

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', (req, res, next) => {
    
});

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', (req, res, next) => {
    
});

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', (req, res, next) => {
    
});

module.exports = router;