import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
//variables de entorno, config
dotenv.config();
const dbConfig = require('../config/db.config')

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: "mariadb",
    dialectOptions: {
        connectTimeout: 60000
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '-05:00',
    // logging: false
});

export default db;