module.exports = (sequelize, Sequelize) => {
  const { DataTypes } = Sequelize;
  const Cupones = sequelize.define("Cupones", {
    idCupon: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descuento: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Cupones;
};
