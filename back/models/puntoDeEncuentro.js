const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');

class PuntoDeEncuentro extends Sequelize.Model { }
PuntoDeEncuentro.init({
    address: {
        type:Sequelize.STRING,
        allowNull: false
    },
    place:{
        type:Sequelize.STRING,
        allowNull: false
    },
    neighborhood:{
        type:Sequelize.STRING,
        allowNull: false
    },
    Attention:{
        type:Sequelize.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'puntoDeEncuentro' });

module.exports = PuntoDeEncuentro;


