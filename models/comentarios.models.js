module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = Sequelize;
    const Comentarios = sequelize.define("Comentarios", {
      idComentario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
  
      comentario: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    });
  
    return Comentarios;
  };
  