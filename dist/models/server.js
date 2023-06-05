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
const torneo_1 = __importDefault(require("../routes/torneo"));
const equipo_1 = __importDefault(require("../routes/equipo"));
const auth_1 = __importDefault(require("../routes/auth"));
const encuentro_1 = __importDefault(require("../routes/encuentro"));
const inscripcion_1 = __importDefault(require("../routes/inscripcion"));
const organizacion_1 = __importDefault(require("../routes/organizacion"));
const resultados_1 = __importDefault(require("../routes/resultados"));
const miembro_1 = __importDefault(require("../routes/miembro"));
const cors_1 = __importDefault(require("cors"));
const connections_1 = __importDefault(require("../db/connections"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios',
            torneos: '/api/torneos',
            equipos: '/api/equipos',
            auth: '/api/auth',
            encuentros: '/api/encuentros',
            inscripcion: '/api/inscripcion',
            organizacion: '/api/organizacion',
            resultados: '/api/resultados',
            miembro: '/api/miembro',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        //definir mis rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connections_1.default.authenticate();
                console.log('database online');
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //LECTURA DEL BODY
        this.app.use(express_1.default.json());
        //CARPETA PUBLICA
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
        this.app.use(this.apiPaths.torneos, torneo_1.default);
        this.app.use(this.apiPaths.equipos, equipo_1.default);
        this.app.use(this.apiPaths.encuentros, encuentro_1.default);
        this.app.use(this.apiPaths.inscripcion, inscripcion_1.default);
        this.app.use(this.apiPaths.organizacion, organizacion_1.default);
        this.app.use(this.apiPaths.resultados, resultados_1.default);
        this.app.use(this.apiPaths.miembro, miembro_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map