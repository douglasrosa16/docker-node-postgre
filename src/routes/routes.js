const express = require('express');

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressesController');
const TechController = require('../controllers/TechController');

import verifyAuth from '../middlewares/verifyAuth';

import sessionsRouter from './sessions';

const routes = express.Router();

//routes.use(verifyAuth); //Colocar dessa forma para funcionar em todas as rotas

routes.use('/sessions', sessionsRouter);

routes.get('/users', verifyAuth, UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id/detail', verifyAuth, UserController.show);

routes.get('/users/:user_id/addresses', verifyAuth,AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);

module.exports = routes;
