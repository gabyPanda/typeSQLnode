"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUusuarios);
router.get('/:id', usuarios_1.getUusuario);
router.post('/', usuarios_1.postUusuario);
router.put('/:id', usuarios_1.putUusuario);
router.delete('/:id', usuarios_1.deleteUusuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map