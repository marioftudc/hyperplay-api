import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Usuario = db.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nit: {
        type: DataTypes.STRING
    },
    nickname: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.DATE
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    code: {
        type: DataTypes.STRING
    }
})


export default Usuario;
