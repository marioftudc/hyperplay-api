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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json({
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.params;
    const usuario = yield usuario_1.default.findOne({ where: { id_usuario: id } });
    if (usuario) {
        res.json({
            status: 200,
            usuario
        });
    }
    else {
        res.status(404).json({
            status: 404,
            msg: `No existe ningún usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { nit, name, lastname, telephone, city, birthdate, email, password, role, code } = req.body;
        const existEmail = yield usuario_1.default.findOne({ where: { email: email } });
        if (existEmail) {
            return res.status(400).json({
                status: 400,
                msg: "El email ingresado ya se encuentra registrado"
            });
        }
        const usuario = usuario_1.default.build({
            nit,
            name,
            lastname,
            telephone,
            city,
            birthdate,
            email,
            password,
            role,
            code
        });
        const salt = bcryptjs_1.default.genSaltSync();
        usuario.set({
            password: bcryptjs_1.default.hashSync(password, salt)
        });
        yield usuario.save();
        res.json({
            msg: "El usuario ha sid_usuarioo creado con exito",
            body: usuario
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id } = req.params;
        const { body } = req;
        const usuario = yield usuario_1.default.findOne({ where: { id_usuario: id } });
        if (!usuario) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id}`
            });
        }
        yield usuario_1.default.update(body, { where: { id_usuario: id } });
        yield usuario.save();
        res.json({
            msg: "Los datos del usuario han sido actualizados",
            body,
            id
        });
    }
    catch (error) {
        res.json({
            status: 400,
            msg: "Hubo un error al actualizar los datos"
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { id } = req.params;
        const { body } = req;
        const usuario = yield usuario_1.default.findOne({ where: { id_usuario: id } });
        if (!usuario) {
            return res.status(404).json({
                status: 404,
                msg: `No existe el usuario con el codigo ${id}`
            });
        }
        yield usuario_1.default.destroy({ where: { id_usuario: id } });
        yield usuario.save();
        res.json({
            msg: "Los datos del Usuario han sido eliminados",
            body,
            id
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map