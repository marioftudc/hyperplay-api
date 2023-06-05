"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const Usuario = connections_1.default.define('Usuario', {
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nit: {
        type: sequelize_1.DataTypes.STRING
    },
    nickname: {
        type: sequelize_1.DataTypes.STRING
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    telephone: {
        type: sequelize_1.DataTypes.STRING
    },
    country: {
        type: sequelize_1.DataTypes.STRING
    },
    city: {
        type: sequelize_1.DataTypes.STRING
    },
    birthdate: {
        type: sequelize_1.DataTypes.DATE
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    role: {
        type: sequelize_1.DataTypes.STRING
    },
    code: {
        type: sequelize_1.DataTypes.STRING
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map