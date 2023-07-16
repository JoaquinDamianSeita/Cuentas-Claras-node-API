const sequelize = require("./db");
const Models = require("../models/schemas/index");
const Category = require("../../db/models/schemas/Category");
require("./associations");

const Categories = [
  { type: "Alimentación" },
  { type: "Transporte" },
  { type: "Educación" },
  { type: "Entretenimiento" },
  { type: "Facturas" },
  { type: "Hogar" },
  { type: "Nafta" },
  { type: "Ropa" },
  { type: "Salud" },
  { type: "Inversiones" },
  { type: "Otros" },
  { type: "Premios" },
  { type: "Regalos" },
  { type: "Sueldo" },
];

exports.GetConnected = async () => {
  try {
    await sequelize.authenticate();
    console.log("Nos hemos conectado a la base de datos");

    let categories = await Category.findAll();
    if (categories.length === 0) {
      Categories.forEach(async (category) => {
        await Category.create(category);
      });
    }
  } catch (error) {
    console.log("Se ha producido un error", error);
  }
};
