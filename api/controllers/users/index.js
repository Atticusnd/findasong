import express from 'express';
import { sign } from '../../lib/jwt.js';
const routes = express.Router();

routes.get('/:id',(req,res) => {
    res.send({token:sign(req.params.id)});
});

routes.post('/', (req, res) => {
    try {
        const { email, password } = req.body;
        res.send({token:sign(email)}).status(201);
    } catch (error) {
        console.log(error);
        res.send({
            message: 'Error while saving new user',
            statusCode: 500,
        });
    }
});

export default routes;
