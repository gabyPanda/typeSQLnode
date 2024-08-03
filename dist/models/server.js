"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const prueba_1 = __importDefault(require("../routes/prueba"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            pruebas: '/api/pruebas'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000'; //si env.port es null use 8000
        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
                this.initializeDatabase();
            }
            catch (error) {
                console.log(error);
                throw new Error('Fallo la conexion con la base de datos');
            }
        });
    }
    initializeDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Sincroniza todos los modelos definidos con la base de datos
                yield connection_1.default.sync();
                console.log('¡Todos los modelos se sincronizaron correctamente con la base de datos!');
            }
            catch (error) {
                console.error('Error al sincronizar con la base de datos:', error);
            }
        });
    }
    ;
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.pruebas, prueba_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map