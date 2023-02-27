let  express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/products', indexController.displayProductsPage);

router.get('/contact', indexController.displayContactPage);

router.get('/services', indexController.displayServicesPage);

/*GET Router for displaying the login page*/
router.get('/login', indexController.displayAddPage);

/*POST Router for processing the Login Page*/
router.post('/login', bookController.processAddPage);

/*GET Router for displaying the register Page*/
router.get('/register', bookController.displayAddPage);

/*POST Router for processing the register page*/
router.post('/register', bookController.processAddPage);

/*GET to perform userLogout*/
router.get('/logout', bookController.performLogout);

/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
