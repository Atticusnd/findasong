import express from 'express';
import { verify } from '../../lib/jwt.js';
import { getResults } from '../../services/songs.js';

const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        console.log('entra');
        if (token == null) return res.send('No token on request').status(401);
        if(!verify) return res.send('Invalid Token').status(403);
        const term  = 'Queen';
        console.log(term);
        console.log(await getResults(term));
        const finalData = await getResults(term);
        res.json(finalData);
    } catch (error) {
        console.log(error);
        res.send({
            message: 'Error on search API',
            status: 500,
        });
    }
});

routes.post('/', async (req, res) => {
    try {
        // const authHeader = req.headers['authorization'];
        // const token = authHeader && authHeader.split(' ')[1];
        console.log('entra');
        // if (token == null) return res.send('No token on request').status(401);
        // if(!verify) return res.send('Invalid Token').status(403);
        const { term } = req.body;
        console.log(term);
        console.log(await getResults(term));
        const finalData = await getResults(term);
        res.send(finalData);
    } catch (error) {
        console.log(error);
        res.send({
            message: 'Error on search API',
            status: 500,
        });
    }
});



export default routes;