"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var server_1 = require("./models/server");
dotenv_1.default.config();
//escribo y tab para importar de un solo
var server = new server_1.default();
server.listen();
