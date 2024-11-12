module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const Categorias = sequelize.define("Categorias", {

        idCategorias: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
         
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: true,
        }
        
    });

    return Categorias;
}

