const express = require('express');

const UserController = require('../controllers/UserController');
const AddressController = require('../controllers/AddressesController');
const TechController = require('../controllers/TechController');
const ConsumerController = require('../controllers/ConsumerController');
const ServiceProvider = require('../controllers/ServiceProviderController');
const Service = require('../controllers/ServiceController');

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

routes.get('/consumers', ConsumerController.index);
routes.post('/consumer/:user_id', ConsumerController.store);
routes.get('/consumer/:user_id', ConsumerController.show);

routes.get('/providers', ServiceProvider.index);
routes.post('/provider/:user_id', ServiceProvider.store);
routes.get('/provider/:user_id', ServiceProvider.show);

routes.get('/services/:service_provider_id', Service.index);
routes.post('/services/:service_provider_id', Service.store);
routes.get('/services/:service_provider_id/:service', Service.show);

module.exports = routes;

