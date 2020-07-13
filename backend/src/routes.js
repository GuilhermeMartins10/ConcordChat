const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const TokenController = require('./controllers/TokenController');

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.post('/user', UserController.create);
routes.get('/user/:email', UserController.index);

routes.post('/token', TokenController.create);

module.exports = routes;