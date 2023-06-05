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
exports.getOrganizaciones = void 0;
const organizacion_1 = __importDefault(require("../models/organizacion"));
const getOrganizaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const organizacion = yield organizacion_1.default.findAll();
    if (organizacion.length === 0) {
        return res.status(404).json({ msg: "Aun no hay participantes inscritos" });
    }
    res.json({
        status: 200,
        organizacion
    });
});
exports.getOrganizaciones = getOrganizaciones;
// export const getInscripcion = async (req: Request, res: Response) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     const { code_torneo } = req.params;
//     const inscripcion = await Inscripciones.findOne({ where: { code_torneo: code_torneo } });
//     if (inscripcion) {
//         res.json({
//             status: 200,
//             inscripcion
//         });
//     } else {
//         res.status(404).json({
//             status: 404,
//             msg: `No existe ninguna inscripcion con el codigo ${code_torneo}`
//         })
//     }
// }
// export const postInscripcion = async (req: Request, res: Response) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     try {
//         const {
//             fee,
//             code_torneo,
//             code_participant,
//             status
//         } = req.body;
//         const torneo: any = await Torneo.findOne({ where: { code: code_torneo } });
//         if (torneo) {
//             return res.status(400).json({
//                 status: 400,
//                 msg: `El Torneo con el codigo ${code_torneo}`
//             })
//         }
//         const equipo: any = await Equipo.findOne({ where: { code: code_participant } });
//         const player: any = await Usuario.findOne({ where: { code: code_participant } });
//         if (equipo || player) {
//             return res.status(400).json({
//                 status: 400,
//                 msg: `El Equipo o jugaodor con el codigo ${code_participant}`
//             })
//         }
//         const inscripcion: any = Inscripciones.build({
//             fee,
//             code_torneo,
//             code_participant,
//             status
//         });
//         await inscripcion.save();
//         res.json({
//             msg: "El encuentro ha sido creado con exito",
//             body: inscripcion
//         });
//     } catch (error) {
//         console.log(error)
//     }
// }
// export const putInscripcion = async (req: Request, res: Response) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     try {
//         const { id_inscripcion } = req.params;
//         const { body } = req;
//         const inscripcion = await Inscripciones.findOne({ where: { id_inscripcion: id_inscripcion } });
//         if (!inscripcion) {
//             return res.status(404).json({
//                 status: 404,
//                 msg: `No existe el encuentro con el codigo ${id_inscripcion}`
//             })
//         }
//         await Inscripciones.update(body, { where: { id_inscripcion: id_inscripcion } });
//         await inscripcion.save();
//         res.json({
//             msg: "Los datos del encuentro han sido actualizados",
//             body
//         })
//     } catch (error) {
//         res.json({
//             status: 400,
//             msg: "Hubo un error al actualizar los datos"
//         })
//     }
// }
// export const deleteInscripcion = async (req: Request, res: Response) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     try {
//         const { id_inscripcion } = req.params;
//         const inscripcion = await Inscripciones.findOne({ where: { id_inscripcion: id_inscripcion } });
//         if (!inscripcion) {
//             return res.status(404).json({
//                 status: 404,
//                 msg: `No existe el usuario con el codigo ${id_inscripcion}`
//             })
//         }
//         await Inscripciones.destroy({ where: { id_inscripcion: id_inscripcion } });
//         await inscripcion.save();
//         res.json({
//             msg: "Los datos del encuentro han sido eliminados",
//             inscripcion
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
//# sourceMappingURL=organizacion.js.map