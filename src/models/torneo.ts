import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Torneo = db.define('torneo', {
    id_torneo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_organizacion: {
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
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
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    }
    
})


export default Torneo;