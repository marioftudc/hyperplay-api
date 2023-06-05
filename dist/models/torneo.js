"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Torneo = connections_1.default.define('torneo', {
    id_torneo: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    game: {
        type: sequelize_1.DataTypes.STRING
    },
    format: {
        type: sequelize_1.DataTypes.STRING
    },
    date: {
        type: sequelize_1.DataTypes.DATE
    },
    n_participants: {
        type: sequelize_1.DataTypes.INTEGER
    },
    prize: {
        type: sequelize_1.DataTypes.INTEGER
    },
    rules: {
        type: sequelize_1.DataTypes.STRING
    },
    region: {
        type: sequelize_1.DataTypes.STRING
    },
    fee: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    matches: {
        type: sequelize_1.DataTypes.INTEGER
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Torneo;
//# sourceMappingURL=torneo.js.map