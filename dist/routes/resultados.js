"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultados_1 = require("../controllers/resultados");
const router = (0, express_1.Router)();
router.get('/', resultados_1.getResultado);
router.get('/:id_resultado', resultados_1.getResultados);
router.post('/', resultados_1.postResultado);
router.put('/:id_resultado', resultados_1.putResultado);
router.delete('/:id_resultado', resultados_1.deleteResultado);
exports.default = router;
//# sourceMappingURL=resultados.js.map