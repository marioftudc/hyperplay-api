"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const resultados = connections_1.default.define('resultados', {
    id_resultado: {
        type: sequelize_1.DataTypes.INTEGER
    },
    id_encuentro: {
        type: sequelize_1.DataTypes.INTEGER
    },
    namegame: {
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
    gamemode: {
        type: sequelize_1.DataTypes.INTEGER
    },
    scoresteam: {
        type: sequelize_1.DataTypes.INTEGER
    },
    scoresplayer: {
        type: sequelize_1.DataTypes.INTEGER
    },
    resultmatchteam: {
        type: sequelize_1.DataTypes.INTEGER
    },
    resultmatchplayer: {
        type: sequelize_1.DataTypes.INTEGER
    },
    map: {
        type: sequelize_1.DataTypes.STRING
    },
    score: {
        type: sequelize_1.DataTypes.STRING
    },
    winner: {
        type: sequelize_1.DataTypes.STRING
    },
    defeat: {
        type: sequelize_1.DataTypes.STRING
    },
    kills: {
        type: sequelize_1.DataTypes.INTEGER
    },
    assist: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = resultados;
//# sourceMappingURL=resultados.js.map