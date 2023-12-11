module.exports = (app) => {
  const produtos = require("../controllers/produto.controller.js");
  var router = require("express").Router();

  // Create a new Cachorro
  router.post("/categoria", produtos.addCategory);
  // Create a new Cachorro
  router.post("/", produtos.create);
  // Create a new Cachorro
  router.post("/categoria", produtos.addCategory);
  // Retrieve all Cachorros
  router.get("/", produtos.findAll);
  // Retrieve a single Cachorro with id
  router.get("/:id", produtos.findOne);
  // Update a Cachorro with id
  router.put("/:id", produtos.update);
  // Delete a Cachorro with id
  router.delete("/:id", produtos.delete);
  // Create a new Cachorro
  router.delete("/", produtos.deleteAll);
  app.use("/produtos", router);
};
