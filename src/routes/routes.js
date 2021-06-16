const express = require('express');

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressesController');
const TechController = require('../controllers/TechController');

import sessionsRouter from './sessions';

const routes = express.Router();
routes.use('/sessions', sessionsRouter);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id/detail', UserController.show);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);

module.exports = routes;
