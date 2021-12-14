import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../lib/database.js';

const USER = sequelize.define('user', {
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        }, 
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {});

export default USER;