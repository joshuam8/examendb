const Sequelize = require('sequelize');

const Consola = (sequelize) =>{

    sequelize.define('tabla',{
        atributo1: Sequelize.STRING,
        atributo2: Sequelize.STRING,
        atributo3: Sequelize.STRING
    })

}

module.exports = Consola;
//module.exports = tabla;
