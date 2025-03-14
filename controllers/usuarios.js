"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUusuario = exports.putUusuario = exports.postUusuario = exports.getUusuario = exports.getUusuarios = void 0;
var usuario_1 = require("../models/usuario");
var getUusuarios = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, usuario_1.default.findAll()];
            case 1:
                usuarios = _a.sent();
                res.json({
                    usuarios: usuarios
                });
                return [2 /*return*/];
        }
    });
}); };
exports.getUusuarios = getUusuarios;
var getUusuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, usuario;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, usuario_1.default.findByPk(id)];
            case 1:
                usuario = _a.sent();
                if (usuario) {
                    res.status(200).json({
                        usuario: usuario
                    });
                }
                else {
                    res.status(404).json({
                        msg: "No existe un usuario con el id ".concat(id)
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
exports.getUusuario = getUusuario;
var postUusuario = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var body, existeEmail, usuario, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, usuario_1.default.findOne({
                        where: {
                            email: body.email
                        }
                    })];
            case 2:
                existeEmail = _a.sent();
                if (existeEmail) {
                    return [2 /*return*/, res.status(400).json({
                            msg: 'Ya existe un usuario con el email ' + body.email
                        })];
                }
                usuario = new usuario_1.default(body);
                return [4 /*yield*/, usuario.save()];
            case 3:
                _a.sent();
                res.json(usuario);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.log(error_1);
                res.status(500).json({
                    msg: 'Hable con el administrador'
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.postUusuario = postUusuario;
var putUusuario = function (req, res) {
    var id = req.params.id;
    var body = req.body;
    res.json({
        msg: 'putUsuario',
        body: body,
        id: id
    });
};
exports.putUusuario = putUusuario;
var deleteUusuario = function (req, res) {
    var id = req.params.id;
    res.json({
        msg: 'deleteUsuario',
        id: id
    });
};
exports.deleteUusuario = deleteUusuario;
