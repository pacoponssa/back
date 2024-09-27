module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Categoria = sequelize.define("Categoria", {

        idCategoria: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true,
        }
        
    });

    return Categoria;
}

