module.exports = (sequelize, Sequelize) => {
  const Categoria = sequelize.define(
    "categoria",
    {
      titulo: {
        type: Sequelize.STRING,
        //   primaryKey: true,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );
  return Categoria;
};
