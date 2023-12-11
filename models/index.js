const config = require("../config/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vendedores = require("./vendedor.model.js")(sequelize, Sequelize);
db.produtos = require("./produto.model.js")(sequelize, Sequelize);
db.categorias = require("./categoria.model.js")(sequelize, Sequelize);
db.lojas = require("./loja.model.js")(sequelize, Sequelize);
db.avaliacoes = require("./avaliacao.model.js")(sequelize, Sequelize);

db.lojas.hasMany(db.vendedores);
db.vendedores.belongsTo(db.lojas);
db.lojas.hasMany(db.produtos);
db.produtos.belongsTo(db.lojas);
db.produtos.hasMany(db.avaliacoes);
db.avaliacoes.belongsTo(db.produtos);
db.produtos.belongsToMany(db.categorias, { through: "produto_categoria" });
db.categorias.belongsToMany(db.produtos, { through: "produto_categoria" });
module.exports = db;
