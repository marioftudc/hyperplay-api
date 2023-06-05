"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Equipo = connections_1.default.define('equipo', {
    id_equipo: {
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
    id_director: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Equipo;
//# sourceMappingURL=equipo.js.map