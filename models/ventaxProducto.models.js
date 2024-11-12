
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const VentaxProducto = sequelize.define("VentaxProducto", {

        idVentaxProducto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
      
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        precioUnitario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
              
    });

    return VentaxProducto;
}

