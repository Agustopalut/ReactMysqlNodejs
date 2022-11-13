import {Sequelize} from "sequelize"
import db from ".././config/Database.js"
// folder models berguna untuk membuat table di mysql
const {DataTypes} = Sequelize;
const User = db.define("users",{
    name : DataTypes.STRING,
    email : DataTypes.STRING,
    gender : DataTypes.STRING
},{
    freezeTableName : true
});

export default User;
// untuk melakukan test,apakah sudah terconnect ke database
(async () =>{
    await db.sync();
})();