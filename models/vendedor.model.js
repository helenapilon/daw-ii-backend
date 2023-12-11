module.exports = (sequelize, Sequelize) => {
  const Vendedor = sequelize.define(
    "vendedor",
    {
      nome: {
        type: Sequelize.STRING,
        //   primaryKey: true,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.INTEGER,
      },
      foto: {
        type: Sequelize.STRING,
      },
    },
    { freezeTableName: true }
  );

  return Vendedor;
};
