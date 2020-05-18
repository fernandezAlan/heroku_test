const Sequelize = require("sequelize");
const sequelize = require("../db/index.js");

class Product extends Sequelize.Model { }
Product.init(
  {
    digital: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize, modelName: "product" }
);

module.exports = Product;
