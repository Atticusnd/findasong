import express from 'express';
import { sign } from '../lib/jwt.js';
const routes = express.Router();

routes.get('/:id',(req,res) => {
    res.send(sign(req.params.id));
});

export default routes;
