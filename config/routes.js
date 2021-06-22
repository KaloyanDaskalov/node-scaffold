const routes = require('express').Router();

const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const notFoundController = require('../controllers/notFoundController');

const { isAuth, isGuest, isOwner } = require('../middlewares/guards');

routes.use('/', homeController);
routes.use('/auth', isGuest(), authController);
routes.use('*', notFoundController);

module.exports = routes;