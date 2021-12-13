import express from 'express';
import { verify } from '../../lib/jwt.js';
import { getResults } from '../../services/songs.js';

const routes = express.Router();

routes.post('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.send('No token on request').statusCode(401);
        if(!verify) return res.send('Invalid Token').statusCode(403);
        const { term } = req.body;
        res.send(await getResults(term));
    } catch (error) {
        res.send({
            message: 'Error on search API',
            statusCode: 500,
        });
    }
});

export default routes;