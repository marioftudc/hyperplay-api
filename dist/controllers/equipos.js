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
exports.getEquipo = exports.getEquipos = void 0;
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
//# sourceMappingURL=equipos.js.map