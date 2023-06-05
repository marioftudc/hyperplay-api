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
exports.deleteTorneo = exports.putTorneo = exports.postTorneo = exports.getTorneo = exports.getTorneos = void 0;
const torneo_1 = __importDefault(require("../models/torneo"));
const getTorneos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const torneos = yield torneo_1.default.findAll();
    if (torneos.length === 0) {
        return res.status(404).json({ msg: "Aun no hay torneos creados" });
    }
    res.json({
        status: 200,
        torneos
    });
});
exports.getTorneos = getTorneos;
const getTorneo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { code } = req.params;
    const torneo = yield torneo_1.default.findOne({ where: { code: code } });
    if (torneo) {
        res.json({
            status: 200,
            torneo
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario con el tarjeta ${code}`
        });
    }
});
exports.getTorneo = getTorneo;
const postTorneo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code, name, game, format, date, n_participants, prize, rules, region, fee, matches } = req.body;
        const existC = yield torneo_1.default.findOne({ where: { code: code } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El torneo ingresado ya se encuentra registrado"
            });
        }
        const torneo = torneo_1.default.build({
            code,
            name,
            game,
            format,
            date,
            n_participants,
            prize,
            rules,
            region,
            fee,
            matches
        });
        yield torneo.save();
        res.json({
            msg: "El cliente ha sido creado con exito",
            body: torneo
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postTorneo = postTorneo;
const putTorneo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code } = req.params;
        const { body } = req;
        const torneo = yield torneo_1.default.findOne({ where: { code: code } });
        if (!torneo) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el torneo con el codigo ${code}`
            });
        }
        yield torneo_1.default.update(body, { where: { code: code } });
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
exports.putTorneo = putTorneo;
const deleteTorneo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code } = req.params;
        const torneo = yield torneo_1.default.findOne({ where: { code: code } });
        if (!torneo) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${code}`
            });
        }
        yield torneo_1.default.destroy({ where: { code: code } });
        yield torneo.save();
        res.json({
            msg: "Los datos del Usuario han sido eliminados",
            code
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteTorneo = deleteTorneo;
//# sourceMappingURL=torneo.js.map