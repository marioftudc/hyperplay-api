"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const torneo_1 = require("../controllers/torneo");
const router = (0, express_1.Router)();
router.get('/', torneo_1.getTorneos);
router.get('/:code', torneo_1.getTorneo);
router.post('/', torneo_1.postTorneo);
router.put('/:code', torneo_1.putTorneo);
router.delete('/:code', torneo_1.deleteTorneo);
exports.default = router;
//# sourceMappingURL=torneo.js.map