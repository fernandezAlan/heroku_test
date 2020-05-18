const Sequelize = require("sequelize");
const sequelize = require("../db/index.js");

class Frame extends Sequelize.Model {}
Frame.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    imgType: {
      type: Sequelize.STRING,
    },
    imgName: {
      type: Sequelize.STRING,
    },
    imgData: {
      type: Sequelize.BLOB("long"),
      allowNull: false,

    },
    imgPath: {
      type: Sequelize.STRING,
      allowNull: false,

    },
  },
  { sequelize, modelName: "frame" }
);

module.exports = Frame;
