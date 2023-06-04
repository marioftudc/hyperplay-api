import express from 'express';
import userRoutes from '../routes/usuario';
import torneoRoutes from '../routes/torneo';
import cors from 'cors';
import { json } from 'sequelize';
import db from '../db/connections';

class Server {

    private app;
    private port: string;
    private apiPaths = {
     usuarios: '/api/usuarios',
     torneos: '/api/torneos'
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
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.torneos, torneoRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}


export default Server;