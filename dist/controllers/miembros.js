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
exports.deleteMiembro = exports.postMiembro = exports.getMiembro = exports.getMiembros = void 0;
const miembro_1 = __importDefault(require("../models/miembro"));
const getMiembros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const equipo = yield miembro_1.default.findAll();
    if (equipo.length === 0) {
        return res.status(404).json({ msg: "Aun no hay equipos creados" });
    }
    res.json({
        status: 200,
        equipo
    });
});
exports.getMiembros = getMiembros;
const getMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { equipo } = req.params;
    const miembro = yield miembro_1.default.findOne({ where: { id_equipo: equipo } });
    if (miembro) {
        res.json({
            status: 200,
            miembro
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario en el equipo ${equipo}`
        });
    }
});
exports.getMiembro = getMiembro;
const postMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_equipo, id_usuario } = req.body;
        const existC = yield miembro_1.default.findOne({ where: { id_equipo: id_equipo, id_usuario: id_usuario } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El Miembro ingresado ya se encuentra registrado al equipo"
            });
        }
        const miembro = miembro_1.default.build({
            id_equipo,
            id_usuario
        });
        yield miembro.save();
        res.json({
            msg: "El miembro ha sido creado con exito",
            body: miembro
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postMiembro = postMiembro;
const deleteMiembro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { equipo, id } = req.params;
        const miembro = yield miembro_1.default.findOne({ where: { id_equipo: equipo, id_usuario: id } });
        if (!miembro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id}`
            });
        }
        yield miembro_1.default.destroy({ where: { id_equipo: equipo, id_usuario: id } });
        yield miembro.save();
        res.json({
            msg: "Los datos del Usuario han sido eliminados",
            id
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteMiembro = deleteMiembro;
//# sourceMappingURL=miembros.js.map