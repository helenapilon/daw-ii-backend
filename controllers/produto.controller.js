const db = require("../models");
const Categoria = db.categorias;
const Produto = db.produtos;
const Loja = db.lojas;
const Avaliacao = db.avaliacoes;
const Op = db.Sequelize.Op;

// Create and Save a new Cachorro
exports.create = (req, res) => {
  // Validate request
  if (!req.body.titulo) {
    res.status(400).send({
      message: "Conteúdo não pode estar vazio!",
    });
    return;
  }

  // Create a Cachorro
  const produto = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    preco: req.body.preco,
    foto: req.body.foto,
    lojaId: req.body.lojaId,
  };

  // Save Cachorro in the database
  Produto.create(produto)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a criação de Produto.",
      });
    });
};

exports.addCategory = (req, res) => {
  const produtoId = req.body.produtoId;
  const categoriaId = req.body.categoriaId;
  // const {produtoId, categoriaId} = req.body;

  Produto.findByPk(produtoId)
    .then(async (produtoEncontrado) => {
      let data = await produtoEncontrado.addCategoria(categoriaId);
      res.send(data);
    })
    .catch((err) => {
      console.log(err, err.message);
      res.status(404).send(err);
    });
};
// Retrieve all Cachorros from the database.
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;

  Produto.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a procura por Produto.",
      });
    });
};

// Find a single Cachorro with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Produto.findByPk(id, { include: [Loja, Avaliacao, Categoria] })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível achar Produto com o id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro na busca por Produto via id=" + id,
      });
    });
};
// Update a Cachorro by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Produto.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Produto foi atualizada com sucesso.",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar Produto com id=${id}. Talvez produto não tenha sido encontrada ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro em atualizar a Produto via id=" + id,
      });
    });
};

// Delete a Cachorro with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Produto.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Produto foi deletada com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível deletar essa Produto; Ela não foi encontrada!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não é possível deletar Produto com id=" + id,
      });
    });
};

// Delete all Cachorros from the database.
exports.deleteAll = (req, res) => {
  Produto.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Produtos foram deletadas com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro enquanto deletava Produtos.",
      });
    });
};
