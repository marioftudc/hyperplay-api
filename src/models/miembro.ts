import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Equipo = db.define('miembro', {

    id_miembro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_equipo: {
        type: DataTypes.INTEGER
    },
    id_usuario: {
        type: DataTypes.INTEGER
    }

})


export default Equipo;