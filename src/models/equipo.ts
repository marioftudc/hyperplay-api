import { DataTypes } from 'sequelize';
import db from '../db/connections';

const equipo = db.define('equipo', {

    id_equipo: {
        type:DataTypes.INTEGER
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


export default equipo;