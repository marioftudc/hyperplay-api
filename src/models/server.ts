import express from 'express';
import userRoutes from '../routes/usuario';
import torneoRoutes from '../routes/torneo';
import equipoRoutes from '../routes/equipo';
import authRoutes from '../routes/auth';
import encuentrosRoutes from '../routes/encuentro';
import inscripcionRoutes from '../routes/inscripcion';
import organizacionRoutes from '../routes/organizacion';
import cors from 'cors';
import { json } from 'sequelize';
import db from '../db/connections';

class Server {

    private app;
    private port: string;
    private apiPaths = {
     usuarios: '/api/usuarios',
     torneos: '/api/torneos',
     equipos: '/api/equipos',
     auth: '/api/auth',
     encuentros: '/api/encuentros',
     inscripcion: '/api/inscripcion',
     organizacion: '/api/organizacion',
    }

    constructor() {
        this.app = express();
        this.port= process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();

       //definir mis rutas
       this.routes();

    }

    async dbConnection(){

        try {
            await db.authenticate();
            console.log('database online');
        } catch (error:any) {
            throw new Error( error );
        }
    }

    middlewares(){
         //CORS
        this.app.use(cors());
         //LECTURA DEL BODY
        this.app.use(express.json());
         //CARPETA PUBLICA
         this.app.use( express.static('public'));
    }


    routes(){
        this.app.use(this.apiPaths.auth, authRoutes);
        this.app.use(this.apiPaths.usuarios, userRoutes);
        this.app.use(this.apiPaths.torneos, torneoRoutes);
        this.app.use(this.apiPaths.equipos, equipoRoutes);
        this.app.use(this.apiPaths.encuentros, encuentrosRoutes);
        this.app.use(this.apiPaths.inscripcion, inscripcionRoutes);
        this.app.use(this.apiPaths.organizacion, organizacionRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}


export default Server;