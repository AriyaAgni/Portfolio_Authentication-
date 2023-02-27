let  express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/products', indexController.displayProductsPage);

router.get('/contact',indexController.display);
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
