module.exports = (sequelize, Sequelize) => {
  const Loja = sequelize.define(
    "loja",
    {
      nome: {
        type: Sequelize.STRING,
        //   primaryKey: true,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  return Loja;
};
