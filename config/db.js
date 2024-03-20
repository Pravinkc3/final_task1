const Sequelize = require('sequelize')
const BookModel = require('../models/bookmodel.js')
const UserModel = require('../models/usermodel.js')

const sequelize = new Sequelize(
    "demodb",
    "root",
    "123456",

    {
        host: "localhost",
        dialect: "mysql"
    }
);

const Books = BookModel(sequelize ,Sequelize);
const Users = UserModel(sequelize ,Sequelize)

const Models = {
    Books,
    Users
};

const connection = {} ;

module.exports = ()=>{
    if(connection.isConnected){
        console.log("connection excited");
        return Models
    }
     sequelize.sync();
     sequelize.authenticate();
    connection.isConnected = true ;
    console.log("new connection created !");
    return Models ;
}
