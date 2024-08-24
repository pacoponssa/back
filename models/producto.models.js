
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Producto = sequelize.define("Producto", {

        idProducto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
          nombre: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        descripcionCorta: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        DescripcionLarga: {
            type: Sequelize.STRING,
            default: false,
        }

      
    });

    return Producto;
}

