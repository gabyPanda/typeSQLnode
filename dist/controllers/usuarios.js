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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUusuario = exports.putUusuario = exports.postUusuario = exports.getUusuario = exports.getUusuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUusuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll(); //regresa una promesa entonces se necesita await
    res.json({
        usuarios
    });
});
exports.getUusuarios = getUusuarios;
const getUusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id); //buscar por primary key
    if (usuario) {
        res.status(200).json({
            usuario
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getUusuario = getUusuario;
const postUusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //busca a un usuario que tenga ese email que recibo como argumento
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            //return para que no continue ejecutando el programa
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }
        // Crea y guarda el usuario en la base de datos
        // const usuario = await Usuario.create({
        //     nombre: body.nombre,
        //     email: body.email,
        //     estado: body.estado
        // });
        const usuario = yield usuario_1.default.create(body);
        res.status(201).json({
            usuario
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUusuario = postUusuario;
const putUusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            });
        }
        yield usuario.update(body);
        res.status(200).json({
            msg: 'se actualizo el usuario correctamente',
            usuario
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUusuario = putUusuario;
const deleteUusuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield usuario.update({ estado: false });
    // await usuario.destroy(); //para destruirlo del todo
    res.json({
        msg: 'Usuario borrado'
    });
});
exports.deleteUusuario = deleteUusuario;
//# sourceMappingURL=usuarios.js.map