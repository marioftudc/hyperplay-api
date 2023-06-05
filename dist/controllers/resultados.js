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
exports.deleteResultado = exports.putResultado = exports.postResultado = exports.getResultados = exports.getResultado = void 0;
const resultados_1 = __importDefault(require("../models/resultados"));
const getResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const resultado = yield resultados_1.default.findAll();
    if (resultado.length === 0) {
        return res.status(404).json({ msg: "Aun no hay Resultado creados" });
    }
    res.json({
        status: 200,
        resultado
    });
});
exports.getResultado = getResultado;
const getResultados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { id_resultado } = req.params;
    const resultado = yield resultados_1.default.findOne({ where: { id_resultado: id_resultado } });
    if (resultado) {
        res.json({
            status: 200,
            resultado
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningun resultado con el codigo ${id_resultado}`
        });
    }
});
exports.getResultados = getResultados;
const postResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_encuentro, namegame, codematch, teams, players, detestats, gameduration, stats } = req.body;
        const resultadoE = yield resultados_1.default.findOne({ where: { id_encuentro: id_encuentro } });
        if (resultadoE) {
            return res.status(400).json({
                status: 400,
                msg: `Los resultados del encuentro con el codigo ${codematch} ya existen`
            });
        }
        const resultados = resultados_1.default.build({
            id_encuentro,
            namegame,
            codematch,
            teams,
            players,
            detestats,
            gameduration,
            stats
        });
        yield resultados.save();
        res.json({
            msg: "Los resultados fueron generados con exito",
            body: resultados
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postResultado = postResultado;
const putResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_resultado } = req.params;
        const { body } = req;
        const resultado = yield resultados_1.default.findOne({ where: { id_resultado: id_resultado } });
        if (!resultado) {
            return res.status(404).json({
                status: 404,
                msg: `No existen los resultados`
            });
        }
        yield resultados_1.default.update(body, { where: { id_resultado: id_resultado } });
        yield resultado.save();
        res.json({
            msg: "Los datos del encuentro han sido actualizados",
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
exports.putResultado = putResultado;
const deleteResultado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_resultado } = req.params;
        const resultados = yield resultados_1.default.findOne({ where: { id_resultado: id_resultado } });
        if (!resultados) {
            return res.status(404).json({
                status: 404,
                msg: `No existe esos resultados`
            });
        }
        yield resultados_1.default.destroy({ where: { id_resultado: id_resultado } });
        yield resultados.save();
        res.json({
            msg: "Los resultados fueron eliminados",
            id_resultado
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteResultado = deleteResultado;
//# sourceMappingURL=resultados.js.map