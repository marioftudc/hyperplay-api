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
exports.putEncuentro = exports.postInscripcion = exports.getInscripcion = exports.getInscripciones = void 0;
const inscripcion_1 = __importDefault(require("../models/inscripcion"));
const torneo_1 = __importDefault(require("../models/torneo"));
const equipo_1 = __importDefault(require("../models/equipo"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getInscripciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const inscripcion = yield inscripcion_1.default.findAll();
    if (inscripcion.length === 0) {
        return res.status(404).json({ msg: "Aun no hay participantes inscritos" });
    }
    res.json({
        status: 200,
        inscripcion
    });
});
exports.getInscripciones = getInscripciones;
const getInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { code_torneo } = req.params;
    const inscripcion = yield inscripcion_1.default.findOne({ where: { code_torneo: code_torneo } });
    if (inscripcion) {
        res.json({
            status: 200,
            inscripcion
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ninguna inscripcion con el codigo ${code_torneo}`
        });
    }
});
exports.getInscripcion = getInscripcion;
const postInscripcion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { fee, code_torneo, code_participant, status } = req.body;
        const torneo = yield torneo_1.default.findOne({ where: { code: code_torneo } });
        if (torneo) {
            return res.status(400).json({
                status: 400,
                msg: `El Torneo con el codigo ${code_torneo}`
            });
        }
        const equipo = yield equipo_1.default.findOne({ where: { code: code_participant } });
        const player = yield usuario_1.default.findOne({ where: { code: code_participant } });
        if (equipo || player) {
            return res.status(400).json({
                status: 400,
                msg: `El Equipo o jugaodor con el codigo ${code_participant}`
            });
        }
        const inscripcion = inscripcion_1.default.build({
            fee,
            code_torneo,
            code_participant,
            status
        });
        yield inscripcion.save();
        res.json({
            msg: "El encuentro ha sido creado con exito",
            body: inscripcion
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postInscripcion = postInscripcion;
const putEncuentro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { code_match } = req.params;
        const { body } = req;
        const encuentro = yield Encuentro.findOne({ where: { code_match: code_match } });
        if (!encuentro) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el encuentro con el codigo ${code_match}`
            });
        }
        yield Encuentro.update(body, { where: { code_match: code_match } });
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
// export const deleteEncuentro = async (req: Request, res: Response) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     try {
//         const { code_match } = req.params;
//         const encuentro = await Encuentro.findOne({ where: { code_match: code_match } });
//         if (!encuentro) {
//             return res.status(404).json({
//                 status: 404,
//                 msg: `No existe el usuario con el codigo ${code_match}`
//             })
//         }
//         await Encuentro.destroy({ where: { code_match: code_match } });
//         await encuentro.save();
//         res.json({
//             msg: "Los datos del encuentro han sido eliminados",
//             encuentro
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
//# sourceMappingURL=inscripcion.js.map