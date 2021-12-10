import express from 'express';
const routes = express.Router();

import users from './users/index.js'

routes.use('/users',users);

export default routes;

