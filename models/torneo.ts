import { DataTypes } from 'sequelize';
import db from '../db/connections';

const torneo = db.define('torneo', {

    id_torneo: {
        type:DataTypes.INTEGER
    },
    code: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    game: {
        type: DataTypes.STRING
    },
    format: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    n_participants: {
        type: DataTypes.INTEGER
    },
    prize: {
        type: DataTypes.INTEGER
    },
    rules: {
        type: DataTypes.STRING
    },
    region: {
        type: DataTypes.STRING
    },
    fee: {
        type: DataTypes.DOUBLE
    },
    matches: {
        type: DataTypes.INTEGER
    }
    
})


export default torneo;