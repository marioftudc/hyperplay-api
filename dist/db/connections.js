"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
//variables de entorno, config
dotenv_1.default.config();
const dbConfig = require('../config/db.config');
const db = new sequelize_1.Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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
exports.default = db;
//# sourceMappingURL=connections.js.map