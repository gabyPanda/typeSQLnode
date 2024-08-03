import { DataTypes } from "sequelize";
import db from "../database/connection";

// Definición del modelo
const Prueba = db.define('Prueba', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false, // El nombre es obligatorio
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, // El email es obligatorio
    unique: true, // Asegura que el email sea único en la tabla
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Valor predeterminado para el estado
  }
}, {
  tableName: 'Pruebas', // Nombre específico para la tabla
  timestamps: true, // Habilita createdAt y updatedAt
  // Puedes añadir otras opciones aquí, como paranoid, version, etc.
});

export default Prueba;
