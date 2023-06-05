import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Resultados = db.define('resultados', {
    id_resultado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_encuentro: {
        type: DataTypes.INTEGER
    },
    namegame: {
        type: DataTypes.STRING
    },
    codematch: {
        type: DataTypes.STRING
    },
    teams: {
        type: DataTypes.STRING
    },
    players: {
        type: DataTypes.STRING
    },
    datestats: {
        type: DataTypes.DATE
    },
    gameduration: {
        type: DataTypes.STRING
    },
    stats: {
        type: DataTypes.STRING
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    }
})


export default Resultados;