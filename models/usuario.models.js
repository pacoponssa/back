
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Usuario = sequelize.define("Usuario", {

        idUsuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
      
    });

    return Usuario;
}

