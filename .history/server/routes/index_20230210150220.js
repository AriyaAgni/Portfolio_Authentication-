import { Router } from 'express';
let router = Router();
import { displayHomePage, displayAboutPage, displayProductsPage, displayContactPage, displayServicesPage } from '../controllers/index';


/* GET home page. */
router.get('/', displayHomePage);

router.get('/home', displayHomePage);

router.get('/about', displayAboutPage);

router.get('/products', displayProductsPage);

router.get('/contact', displayContactPage);

router.get('/services', displayServicesPage);

export default router;
