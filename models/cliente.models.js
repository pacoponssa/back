
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Cliente = sequelize.define("Cliente", {

        idCliente: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
          nombre: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        telefono: {
            type: Sequelize.INTEGER,
            default: false,
        },

        usuario: {
            type: Sequelize.STRING,
            default: false,
        }
      
    });

    return Cliente;
}

