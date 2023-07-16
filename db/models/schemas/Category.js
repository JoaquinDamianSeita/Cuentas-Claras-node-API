const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

class Category extends Model {}
Category.init(
  {
    type: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "category",
    timestamps: false
  }
);

module.exports = Category;