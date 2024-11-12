
module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Imagen = sequelize.define("Imagen", {

        idImagen: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
          ubicacion: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          nroOrden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

        // ProductoIdProducto: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false
        // }
              
    });

    return Imagen;
}

