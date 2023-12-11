module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define(
    "produto",
    {
      titulo: {
        type: Sequelize.STRING,
        //   primaryKey: true,
        allowNull: false,
      },
      preco: {
        type: Sequelize.INTEGER,
      },
      foto: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.STRING,
      },
    },
    { freezeTableName: true }
  );

  return Produto;
};
