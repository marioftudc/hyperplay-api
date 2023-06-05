"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Inscripciones = connections_1.default.define('inscripciones', {
    id_inscripcion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fee: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    code_torneo: {
        type: sequelize_1.DataTypes.STRING
    },
    code_participant: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Inscripciones;
//# sourceMappingURL=inscripcion.js.map