"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inscripcion_1 = require("../controllers/inscripcion");
const router = (0, express_1.Router)();
router.get('/', inscripcion_1.getInscripciones);
router.get('/:code_torneo', inscripcion_1.getInscripcion);
router.post('/', inscripcion_1.postInscripcion);
router.put('/:id_inscripcion', inscripcion_1.putInscripcion);
router.delete('/:id_inscripcion', inscripcion_1.deleteInscripcion);
exports.default = router;
//# sourceMappingURL=inscripcion.js.map