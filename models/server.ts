import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import pruebaRoutes from '../routes/prueba';
import cors from 'cors';

import db from '../database/connection';


class Server {

    //se definen las propiedades de antemano
    //todas las variables cuando se declaran se ocupan inicializar
    //es importante siempre definir el tipo de variable
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        pruebas: '/api/pruebas'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';//si env.port es null use 8000

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
   
        try {

            await db.authenticate();
            console.log('Database online');
            this.initializeDatabase();

        } catch (error) {
            console.log(error);
            throw new Error( 'Fallo la conexion con la base de datos' );
        }

    }

    async initializeDatabase(){
        try {
          // Sincroniza todos los modelos definidos con la base de datos
          await db.sync();
          console.log('¡Todos los modelos se sincronizaron correctamente con la base de datos!');
        } catch (error) {
          console.error('Error al sincronizar con la base de datos:', error);
        }
      };

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura del body
        this.app.use(express.json());

        // Carpeta pública
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
        this.app.use(this.apiPaths.pruebas,pruebaRoutes);
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        })
    }

}

export default Server;