
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const ProductoxCarrito = sequelize.define("ProductoxCarrito", {

        idProductoxCarrito: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },

        precioUnitario: {
            type: DataTypes.STRING,
            allowNull: false,
        }
      
    });

    return ProductoxCarrito;
}

