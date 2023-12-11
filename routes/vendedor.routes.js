module.exports = (app) => {
  const vendedores = require("../controllers/vendedor.controller.js");
  var router = require("express").Router();

  // Create a new Cachorro
  router.post("/", vendedores.create);
  // Retrieve all Cachorros
  router.get("/", vendedores.findAll);
  // Retrieve a single Cachorro with id
  router.get("/:id", vendedores.findOne);
  // Update a Cachorro with id
  router.put("/:id", vendedores.update);
  // Delete a Cachorro with id
  router.delete("/:id", vendedores.delete);
  // Create a new Cachorro
  router.delete("/", vendedores.deleteAll);
  app.use("/vendedores", router);
};
