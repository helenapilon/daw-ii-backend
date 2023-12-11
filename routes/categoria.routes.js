module.exports = (app) => {
  const categorias = require("../controllers/categoria.controller.js");
  var router = require("express").Router();

  // Create a new Cachorro
  router.post("/", categorias.create);
  // Retrieve all Cachorros
  router.get("/", categorias.findAll);
  // Retrieve a single Cachorro with id
  router.get("/:id", categorias.findOne);
  // Update a Cachorro with id
  router.put("/:id", categorias.update);
  // Delete a Cachorro with id
  router.delete("/:id", categorias.delete);
  // Create a new Cachorro
  router.delete("/", categorias.deleteAll);
  app.use("/categorias", router);
};
