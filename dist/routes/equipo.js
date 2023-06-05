"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipos_1 = require("../controllers/equipos");
const router = (0, express_1.Router)();
router.get('/', equipos_1.getEquipos);
router.get('/:code', equipos_1.getEquipo);
router.post('/', equipos_1.postEquipo);
router.put('/:code', equipos_1.putEquipo);
router.delete('/:code', equipos_1.deleteEquipo);
exports.default = router;
//# sourceMappingURL=equipo.js.map