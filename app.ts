import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

//escribo y tab para importar de un solo
const server = new Server();

server.listen();

//REVISAR COMO PUEDO HACER CLASES CON RELACIONES
//HACER QUERYS EN MYSQL