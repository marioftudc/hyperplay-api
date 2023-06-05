"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inscripcion_1 = require("../controllers/inscripcion");
const router = (0, express_1.Router)();
router.get('/', inscripcion_1.getInscripciones);
// router.get('/:code_torneo',          getInscripcion);
// router.post('/',          postInscripcion);
// router.put('/:id_inscripcion',          putInscripcion);
// router.delete('/:id_inscripcion',          deleteInscripcion);
exports.default = router;
//# sourceMappingURL=organizacion.js.map