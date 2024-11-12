
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Venta = sequelize.define("Venta", {

        idVenta: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
          },

        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        fechaEnvio: {
            type: DataTypes.DATE,
            allowNull: true,
        },

        modoPago: {
            type: DataTypes.STRING,
            allowNull: false,
        }
      
    });

    return Venta;
}

