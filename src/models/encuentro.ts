import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Encuentro = db.define('encuentro', {

    id_encuentro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code_tournament: {
        type: DataTypes.INTEGER
    },
    code_match: {
        type: DataTypes.INTEGER
    },
    code_team: {
        type: DataTypes.INTEGER
    },
    code_player: {
        type: DataTypes.INTEGER
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    }
})


export default Encuentro;