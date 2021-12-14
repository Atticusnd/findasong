import express from 'express';
import { sign } from '../../lib/jwt.js';
const routes = express.Router();
import user from '../../models/user.js';
import {encrypt} from '../../lib/encrypt.js';

routes.get('/:id',(req,res) => {
    res.send({token:sign(req.params.id)});
});

routes.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const passwordEncrypted = await encrypt(password);
        const newUser = await user.create({
            email,
            password: passwordEncrypted,
        });
        console.log(newUser);
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
