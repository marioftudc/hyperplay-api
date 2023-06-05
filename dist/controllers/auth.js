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
exports.verifyAuth = exports.authUser = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.SECRET_KEY || 'tokentest';
const authUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const { email, password } = req.body;
    const usuario = yield usuario_1.default.findOne({ where: { email: email } });
    if (!usuario) {
        return res.status(400).json({ msg: 'El usuario no existe' });
    }
    const passCorrecto = yield bcryptjs_1.default.compare(password, usuario.dataValues.password);
    if (!passCorrecto) {
        return res.status(400).json({ msg: 'Password Incorrecto' });
    }
    const payload = {
        usuario: {
            id: usuario.dataValues.id_usuario
        }
    };
    // firmar el JWT
    jsonwebtoken_1.default.sign(payload, secretKey, {
        expiresIn: 3600
    }, (error, token) => {
        if (error)
            throw error;
        // Mensaje de confirmación
        res.json({
            status: 200,
            token
        });
    });
});
exports.authUser = authUser;
const verifyAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.header("Access-Control-Allow-Origin", "*");
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        const { id } = decoded.usuario;
        const userFind = yield usuario_1.default.findByPk(id);
        userFind === null || userFind === void 0 ? true : delete userFind.dataValues.password;
        res.status(200).json({
            message: 'Authenticated Token',
            usuario: userFind,
            Issued_at: new Date(decoded.iat),
            Expires_at: new Date(decoded.exp),
            Issuer: decoded.iss,
        });
    }));
});
exports.verifyAuth = verifyAuth;
//# sourceMappingURL=auth.js.map