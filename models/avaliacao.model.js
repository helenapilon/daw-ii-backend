module.exports = (sequelize, Sequelize) => {
  const Avaliacao = sequelize.define(
    "avaliacao",
    {
      titulo: {
        type: Sequelize.STRING,
        //   primaryKey: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
      },
      estrelas: {
        type: Sequelize.NUMERIC,
      },
    },
    { freezeTableName: true }
  );
  return Avaliacao;
};
