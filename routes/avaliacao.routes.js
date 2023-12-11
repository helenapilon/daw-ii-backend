module.exports = (app) => {
  const avaliacoes = require("../controllers/avaliacao.controller.js");
  var router = require("express").Router();

  // Create a new Cachorro
  router.post("/", avaliacoes.create);
  // Retrieve all Cachorros
  router.get("/", avaliacoes.findAll);
  // Retrieve a single Cachorro with id
  router.get("/:id", avaliacoes.findOne);
  // Update a Cachorro with id
  router.put("/:id", avaliacoes.update);
  // Delete a Cachorro with id
  router.delete("/:id", avaliacoes.delete);
  // Create a new Cachorro
  router.delete("/", avaliacoes.deleteAll);
  app.use("/avaliacoes", router);
};
