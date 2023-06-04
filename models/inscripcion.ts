import { DataTypes } from 'sequelize';
import db from '../db/connections';

const inscripcion = db.define('inscripcion', {

    id_inscripcion: {
        type:DataTypes.INTEGER
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
    }
})

export default inscripcion;