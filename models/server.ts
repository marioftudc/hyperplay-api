import express from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import { json } from 'sequelize';

class Server {

    private app;
    private port: string;
    private apiPaths = {
     usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port= process.env.PORT || '8000';

        this.middlewares();

       //definir mis rutas
       this.routes();

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
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }
}


export default Server;