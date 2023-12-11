module.exports = (app) => {
  const lojas = require("../controllers/loja.controller.js");
  var router = require("express").Router();

  // Create a new Cachorro
  router.post("/", lojas.create);
  // Retrieve all Cachorros
  router.get("/", lojas.findAll);
  // Retrieve a single Cachorro with id
  router.get("/:id", lojas.findOne);
  // Update a Cachorro with id
  router.put("/:id", lojas.update);
  // Delete a Cachorro with id
  router.delete("/:id", lojas.delete);
  // Create a new Cachorro
  router.delete("/", lojas.deleteAll);
  app.use("/lojas", router);
};
