"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizacion_1 = require("../controllers/organizacion");
const router = (0, express_1.Router)();
router.get('/', organizacion_1.getOrganizaciones);
router.get('/:id_organizacion', organizacion_1.getOrganizacion);
router.post('/', organizacion_1.postOrganizacion);
router.put('/:id_organizacion', organizacion_1.putOrganizacion);
router.delete('/:id_organizacion', organizacion_1.deleteOrganizacion);
exports.default = router;
//# sourceMappingURL=organizacion.js.map