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
exports.deleteEncuentro = exports.putEncuentro = exports.postEncuentro = exports.getEncuentro = exports.getEncuentros = void 0;
const encuentro_1 = __importDefault(require("../models/encuentro"));
const getEncuentros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const encuentro = yield encuentro_1.default.findAll();
    if (encuentro.length === 0) {
        return res.status(404).json({ msg: "Aun no hay equipos creados" });
    }
    res.json({
        status: 200,
        encuentro
    });
});
exports.getEncuentros = getEncuentros;
const getEncuentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { code_match } = req.params;
    const encuentro = yield encuentro_1.default.findOne({ where: { code_match: code_match } });
    if (encuentro) {
        res.json({
            status: 200,
            encuentro
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún encuentro con el codigo ${code_match}`
        });
    }
});
exports.getEncuentro = getEncuentro;
const postEncuentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code_tournament, code_match, code_team, code_player } = req.body;
        const existC = yield encuentro_1.default.findOne({ where: { code_match: code_match } });
        if (existC) {
            return res.status(400).json({
                status: 400,
                msg: "El encuentro generado ya se encuentra creado"
            });
        }
        const encuentro = encuentro_1.default.build({
            code_tournament,
            code_match,
            code_team,
            code_player
        });
        yield encuentro.save();
        res.json({
            msg: "El encuentro ha sido creado con exito",
            body: encuentro
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postEncuentro = postEncuentro;
const putEncuentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code_match } = req.params;
        const { body } = req;
        const encuentro = yield encuentro_1.default.findOne({ where: { code_match: code_match } });
        if (!encuentro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el encuentro con el codigo ${code_match}`
            });
        }
        yield encuentro_1.default.update(body, { where: { code_match: code_match } });
        yield encuentro.save();
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
exports.putEncuentro = putEncuentro;
const deleteEncuentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code_match } = req.params;
        const encuentro = yield encuentro_1.default.findOne({ where: { code_match: code_match } });
        if (!encuentro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${code_match}`
            });
        }
        yield encuentro_1.default.destroy({ where: { code_match: code_match } });
        yield encuentro.save();
        res.json({
            msg: "Los datos del encuentro han sido eliminados",
            encuentro
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteEncuentro = deleteEncuentro;
//# sourceMappingURL=encuentro.js.map