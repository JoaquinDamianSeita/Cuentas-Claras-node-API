const { Sequelize } = require("sequelize");
const { database } = require("./config");
const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    port: database.port,
    host: database.host,
    dialect: "postgres"
  }
);

module.exports = sequelize;
