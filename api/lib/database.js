import { Sequelize } from 'sequelize';

const database = new Sequelize('songs', 'root', 'rootroot', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
try {
    database.sync();
} catch (error) {
    console.log(error);
}

export default database;