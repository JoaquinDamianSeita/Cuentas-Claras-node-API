const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/db");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false
  }
);

module.exports = User;
