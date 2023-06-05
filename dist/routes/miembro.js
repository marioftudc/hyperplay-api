"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const miembros_1 = require("../controllers/miembros");
const router = (0, express_1.Router)();
router.get('/', miembros_1.getMiembros);
router.get('/:id_equipo', miembros_1.getMiembro);
router.post('/', miembros_1.postMiembro);
router.delete('/:id_equipo/:id_usuario', miembros_1.deleteMiembro);
exports.default = router;
//# sourceMappingURL=miembro.js.map