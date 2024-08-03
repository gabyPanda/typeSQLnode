import { Sequelize } from "sequelize";

//SEQUELIZE(DatabaseName, user, contraseña)
const db = new Sequelize('node','root','root',{
    host:'localhost',
    dialect: 'mysql',//aca se escoge que sql uso mysql, o mssql(server), posgre...etc
    //logging:false
});


export default db;