import express from 'express';
import cors from 'cors';
import controllers from './controllers/index.js';
import dotenv from 'dotenv';
import database from './lib/database.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 8080;;

app.use(express.json());
app.use(cors());
app.use('/', controllers);


 

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
