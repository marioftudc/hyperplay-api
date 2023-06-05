"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuentro_1 = require("../controllers/encuentro");
const router = (0, express_1.Router)();
router.get('/', encuentro_1.getEncuentros);
router.get('/:code_match', encuentro_1.getEncuentro);
router.post('/', encuentro_1.postEncuentro);
router.put('/:code_match', encuentro_1.putEncuentro);
router.delete('/:code_match', encuentro_1.deleteEncuentro);
exports.default = router;
//# sourceMappingURL=encuentro.js.map