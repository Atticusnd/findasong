import express from 'express';
const routes = express.Router();

import users from './users/index.js';
import songs from './songs/index.js';

routes.use('/users',users);
routes.use('/songs',songs);

export default routes;

