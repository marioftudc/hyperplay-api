"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Resultados = connections_1.default.define('resultados', {
    id_resultado: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_encuentro: {
        type: sequelize_1.DataTypes.INTEGER
    },
    namegame: {
        type: sequelize_1.DataTypes.STRING
    },
    codematch: {
        type: sequelize_1.DataTypes.STRING
    },
    teams: {
        type: sequelize_1.DataTypes.STRING
    },
    players: {
        type: sequelize_1.DataTypes.STRING
    },
    datestats: {
        type: sequelize_1.DataTypes.DATE
    },
    gameduration: {
        type: sequelize_1.DataTypes.STRING
    },
    stats: {
        type: sequelize_1.DataTypes.STRING
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Resultados;
//# sourceMappingURL=resultados.js.map