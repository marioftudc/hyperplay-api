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
exports.deleteEquipo = exports.putEquipo = exports.postEquipo = exports.getEquipo = exports.getEquipos = void 0;
const equipo_1 = __importDefault(require("../models/equipo"));
const getEquipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const equipo = yield equipo_1.default.findAll();
    if (equipo.length === 0) {
        return res.status(404).json({ msg: "Aun no hay equipos creados" });
    }
    res.json({
        status: 200,
        equipo
    });
});
exports.getEquipos = getEquipos;
const getEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { code } = req.params;
    const equipo = yield equipo_1.default.findOne({ where: { code: code } });
    if (equipo) {
        res.json({
            status: 200,
            equipo
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario con el tarjeta ${code}`
        });
    }
});
exports.getEquipo = getEquipo;
const postEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code, name, id_director } = req.body;
        const existC = yield equipo_1.default.findOne({ where: { code: code } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El equipo ingresado ya se encuentra registrado"
            });
        }
        const equipo = equipo_1.default.build({
            code,
            name,
            id_director
        });
        yield equipo.save();
        res.json({
            msg: "El equipo ha sido creado con exito",
            body: equipo
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postEquipo = postEquipo;
const putEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code } = req.params;
        const { body } = req;
        const torneo = yield equipo_1.default.findOne({ where: { code: code } });
        if (!torneo) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el torneo con el codigo ${code}`
            });
        }
        yield equipo_1.default.update(body, { where: { code: code } });
        yield torneo.save();
        res.json({
            msg: "Los datos del torneo han sido actualizados",
            body
        });
    }
    catch (error) {
        res.json({
            status: 400,
            msg: "Hubo un error al actualizar los datos"
        });
    }
});
exports.putEquipo = putEquipo;
const deleteEquipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code } = req.params;
        const equipo = yield equipo_1.default.findOne({ where: { code: code } });
        if (!equipo) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${code}`
            });
        }
        yield equipo_1.default.destroy({ where: { code: code } });
        yield equipo.save();
        res.json({
            msg: "Los datos del Usuario han sido eliminados",
            code
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteEquipo = deleteEquipo;
//# sourceMappingURL=equipos.js.map