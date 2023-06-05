import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Inscripciones = db.define('inscripciones', {

    id_inscripcion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fee: {
        type: DataTypes.DOUBLE
    },
    code_torneo: {
        type: DataTypes.STRING
    },
    code_participant: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    }
})

export default Inscripciones;