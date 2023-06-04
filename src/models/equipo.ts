import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Equipo = db.define('equipo', {

    id_equipo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    roaster: {
        type: DataTypes.STRING
    }
    
})


export default Equipo;