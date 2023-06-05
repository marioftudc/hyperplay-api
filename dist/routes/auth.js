"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = require("../controllers/auth");
const cors_1 = __importDefault(require("cors"));
const router = (0, express_1.Router)();
router.use((0, cors_1.default)());
router.post('/', [(0, cors_1.default)(), body_parser_1.default.json()], auth_1.authUser);
router.get('/', (0, cors_1.default)(), auth_1.verifyAuth);
exports.default = router;
//# sourceMappingURL=auth.js.map