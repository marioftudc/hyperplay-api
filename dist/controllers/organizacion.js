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
exports.deleteOrganizacion = exports.putOrganizacion = exports.postOrganizacion = exports.getOrganizacion = exports.getOrganizaciones = void 0;
const organizacion_1 = __importDefault(require("../models/organizacion"));
const getOrganizaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const organizacion = yield organizacion_1.default.findAll();
    if (organizacion.length === 0) {
        return res.status(404).json({ msg: "Aun no hay Organizaciones creadas" });
    }
    res.json({
        status: 200,
        organizacion
    });
});
exports.getOrganizaciones = getOrganizaciones;
const getOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { id_organizacion } = req.params;
    const organizacion = yield organizacion_1.default.findOne({ where: { id_organizacion: id_organizacion } });
    if (organizacion) {
        res.json({
            status: 200,
            organizacion
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ninguna organizacion con el codigo ${id_organizacion}`
        });
    }
});
exports.getOrganizacion = getOrganizacion;
const postOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { name, type, status } = req.body;
        const organizacionE = yield organizacion_1.default.findOne({ where: { name: name } });
        if (organizacionE) {
            return res.status(400).json({
                status: 400,
                msg: `La organizacion con el nombre ${name} ya existe`
            });
        }
        const organizacion = organizacion_1.default.build({
            name,
            type,
            status
        });
        yield organizacion.save();
        res.json({
            msg: "La organizacion ha sido creada con exito",
            body: organizacion
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postOrganizacion = postOrganizacion;
const putOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_organizacion } = req.params;
        const { body } = req;
        const organizacion = yield organizacion_1.default.findOne({ where: { id_organizacion: id_organizacion } });
        if (!organizacion) {
            return res.status(404).json({
                status: 404,
                msg: `No existe la organizacion con el codigo ${id_organizacion}`
            });
        }
        yield organizacion_1.default.update(body, { where: { id_organizacion: id_organizacion } });
        yield organizacion.save();
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
exports.putOrganizacion = putOrganizacion;
const deleteOrganizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id_organizacion } = req.params;
        const organizacion = yield organizacion_1.default.findOne({ where: { id_organizacion: id_organizacion } });
        if (!organizacion) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id_organizacion}`
            });
        }
        yield organizacion_1.default.destroy({ where: { id_organizacion: id_organizacion } });
        yield organizacion.save();
        res.json({
            msg: "Los datos del encuentro han sido eliminados",
            id_organizacion
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteOrganizacion = deleteOrganizacion;
//# sourceMappingURL=organizacion.js.map