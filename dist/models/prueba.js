"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
// Definición del modelo
const Prueba = connection_1.default.define('Prueba', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false, // El nombre es obligatorio
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false, // El email es obligatorio
        unique: true, // Asegura que el email sea único en la tabla
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true, // Valor predeterminado para el estado
    }
}, {
    tableName: 'Pruebas', // Nombre específico para la tabla
    timestamps: true, // Habilita createdAt y updatedAt
    // Puedes añadir otras opciones aquí, como paranoid, version, etc.
});
exports.default = Prueba;
//# sourceMappingURL=prueba.js.map