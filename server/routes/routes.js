const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @description: Home route;
 * @method: GET/
 */
route.get('/', services.landingRoute);

/**
 * @description: login page;
 * @method: GET/
 */
route.get('/login', services.loginroute);

route.get('/signUp', services.signUproute)


/**
 * @description: API calls to databse related stuffs. 
 * 
 *  */
// route.get('/api/users', controller.finduserForLogin);
route.post('/api/loginUsers', controller.loginUser);
route.post('/api/createUsers', controller.createNewUser);

module.exports = route;
