import { DataTypes } from 'sequelize';
import db from '../db/connections';

const resultados = db.define('resultados', {

    id_resultado: {
        type:DataTypes.INTEGER
    },
    id_encuentro: {
        type: DataTypes.INTEGER
    },
    namegame: {
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
    gamemode: {
        type: DataTypes.INTEGER
    },
    scoresteam: {
        type: DataTypes.INTEGER
    },
    scoresplayer: {
        type: DataTypes.INTEGER
    },
    resultmatchteam: {
        type: DataTypes.INTEGER
    },
    resultmatchplayer: {
        type: DataTypes.INTEGER
    },
    map: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.STRING
    },
    winner: {
        type: DataTypes.STRING
    },
    defeat: {
        type: DataTypes.STRING
    },
    kills: {
        type: DataTypes.INTEGER
    },
    assist: {
        type: DataTypes.INTEGER
    }
})


export default resultados;