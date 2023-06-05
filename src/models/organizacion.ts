import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Organizacion = db.define('organizaciones', {

    id_organizacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    tel: {
        type: DataTypes.STRING
    },
    redes: {
        type: DataTypes.STRING
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    createdAt: {
        type: DataTypes.DATE
    }
    
})

export default Organizacion;