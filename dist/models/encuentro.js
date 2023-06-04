"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connections_1 = __importDefault(require("../db/connections"));
const encuentro = connections_1.default.define('encuentro', {
    id_encuentro: {
        type: sequelize_1.DataTypes.INTEGER
    },
    code_tournament: {
        type: sequelize_1.DataTypes.INTEGER
    },
    code_match: {
        type: sequelize_1.DataTypes.INTEGER
    },
    code_team: {
        type: sequelize_1.DataTypes.INTEGER
    },
    code_player: {
        type: sequelize_1.DataTypes.INTEGER
    }
});
exports.default = encuentro;
//# sourceMappingURL=encuentro.js.map