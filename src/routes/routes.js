const express = require('express');

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressesController');
const TechController = require('../controllers/TechController');
const ConsumerController = require('../controllers/ConsumerController');
const ServiceProvider = require('../controllers/ServiceProviderController');
const Service = require('../controllers/Service');

import verifyAuth from '../middlewares/verifyAuth';

import sessionsRouter from './sessions';

const routes = express.Router();

//routes.use(verifyAuth); //Colocar dessa forma para funcionar em todas as rotas

routes.use('/sessions', sessionsRouter);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.get('/users/:user_id/detail', UserController.show);
routes.delete('/users', UserController.destroy)

routes.get('/users/:user_id/addresses', verifyAuth,AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);

routes.get('/:user_id/consumer', ConsumerController.index);
routes.post('/:user_id/consumer', ConsumerController.store);

routes.get('/providers', ServiceProvider.index);
routes.post('/provider/:user_id', ServiceProvider.store);

routes.get('/:service_provider_id/service', Service.index);
routes.post('/:service_provider_id/service', Service.store);

module.exports = routes;

