import { DataTypes } from 'sequelize';
import db from '../db/connections';

const encuentro = db.define('encuentro', {

    id_encuentro: {
        type:DataTypes.INTEGER
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
    }
})


export default encuentro;