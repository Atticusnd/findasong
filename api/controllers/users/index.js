import express from 'express';
import { sign } from '../../lib/jwt.js';
const routes = express.Router();

routes.get('/:id',(req,res) => {
    res.send(sign(req.params.id));
});

routes.post('/', (req, res) => {
    try {
        const { email, password } = req.body;
        res.send('User added').statusCode(201);
    } catch (error) {
        res.send({
            message: 'Error while saving new user',
            statusCode: 500,
        });
    }
});

export default routes;
