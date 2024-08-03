"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//SEQUELIZE(DatabaseName, user, contraseña)
const db = new sequelize_1.Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', //aca se escoge que sql uso mysql, o mssql(server), posgre...etc
    //logging:false
});
exports.default = db;
//# sourceMappingURL=connection.js.map