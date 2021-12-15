import { Sequelize } from 'sequelize';

const database = new Sequelize('heroku_9cc50a195dede52', 'bac404d36af516', 'e3d3b771', {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
});
try {
    database.sync();
} catch (error) {
    console.log(error);
}

export default database;