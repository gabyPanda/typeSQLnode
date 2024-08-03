"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pruebas_1 = require("../controllers/pruebas");
const router = (0, express_1.Router)();
router.get('/', pruebas_1.getPruebas);
router.get('/:id', pruebas_1.getPrueba);
router.post('/', pruebas_1.postPrueba);
router.put('/:id', pruebas_1.putPrueba);
router.delete('/:id', pruebas_1.deletePrueba);
exports.default = router;
//# sourceMappingURL=prueba.js.map