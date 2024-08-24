module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Carrito = sequelize.define("Carrito", {

        idCarrito: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
        total: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
        
    });

    return Carrito;
}