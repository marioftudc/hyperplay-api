"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const organizacion = connections_1.default.define('organizacion', {
    id_organizacion: {
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    type: {
        type: sequelize_1.DataTypes.STRING
    },
    personal: {
        type: sequelize_1.DataTypes.INTEGER
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = organizacion;
//# sourceMappingURL=organizacion.js.map