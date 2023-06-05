import { DataTypes } from 'sequelize';
import db from '../db/connections';

const organizacion = db.define('organizacion', {

    id_organizacion: {
        type:DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    personal: {
        type: DataTypes.INTEGER
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    }
    
})

export default organizacion;