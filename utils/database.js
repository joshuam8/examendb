//Configuración de sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','admin','Password2026',{
    dialect:'mysql',
    host:'database-1.cne03r9weewa.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});
//module.exports =sequelize;

const Consola = sequelize.define('consola',{
    //Atributos
    nombre:{
        type:Sequelize.STRING,
        allowNull: false
    },
    marca:{
        type:Sequelize.STRING,
        allowNull: false
    }
});

//Prueba de conexión

sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa")
    })