const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');

class Display extends Sequelize.Model { }
Display.init({
    imgURL: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, { sequelize, modelName: 'display' });

module.exports = Display;