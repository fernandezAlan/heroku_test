const Sequelize = require("sequelize");
const sequelize = require("../db/index.js");

class Size extends Sequelize.Model {}
Size.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    type: {
      type: Sequelize.ENUM({
        values: ["digital", "impreso"],
      }),
      allowNull: false,
    },
  },
  { sequelize, modelName: "size" }
);

module.exports = Size;
