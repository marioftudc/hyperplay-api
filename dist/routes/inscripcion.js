"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inscripcion_1 = require("../controllers/inscripcion");
const router = (0, express_1.Router)();
router.get('/', inscripcion_1.getInscripciones);
router.get('/:code', inscripcion_1.getInscripcion);
router.post('/', inscripcion_1.postInscripcion);
// router.put('/:code',          putEquipo);
// router.delete('/:code',          deleteEquipo);
exports.default = router;
//# sourceMappingURL=inscripcion.js.map