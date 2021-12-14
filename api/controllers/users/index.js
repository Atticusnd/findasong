import express from 'express';
import { sign } from '../../lib/jwt.js';
const routes = express.Router();
import User from '../../models/user.js';
import { encrypt, comparePassword } from '../../lib/encrypt.js';

routes.get('/:id',(req,res) => {
    res.send({token:sign(req.params.id)});
});

routes.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const passwordEncrypted = await encrypt(password);
        const isExistingUser = await User.findOne({where: { email} });
        if(isExistingUser){
            if(await comparePassword(password,isExistingUser.getDataValue('password'))){
                return res.send({token:sign(email)});
            }else{
                return res.status(403).send('Password Incorrect');
            }
        }
        const newUser = await User.create({
            email,
            password: passwordEncrypted,
        });
        res.status(201).send({token:sign(email)});
    } catch (error) {
        console.log(error);
        res.send({
            message: 'Error while saving new user',
            statusCode: 500,
        });
    }
});

export default routes;
