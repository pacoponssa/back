const Sequelize = require("sequelize");

const config = require("../config/index.config"); // se puede omitir el index.js


const sequelize = new Sequelize(
  config.db.schema,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    dialect: config.db.dialect,
    port: config.db.port,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importar los modelos
db.producto = require("./producto.models")(sequelize, Sequelize);
db.imagen = require("./imagen.models")(sequelize, Sequelize);
db.categorias = require("./categorias.models")(sequelize, Sequelize);
db.venta = require("./venta.models")(sequelize, Sequelize);
db.cliente = require("./cliente.models")(sequelize, Sequelize);
db.ventaxProducto = require("./VentaxProducto.models")(sequelize, Sequelize);
db.carrito = require("./carrito.models")(sequelize, Sequelize);
db.productoxCarrito = require("./ProductoxCarrito.models")(sequelize, Sequelize);

// relacion 1 a muchos
// un producto puede tener muchas imagenes
db.producto.hasMany(db.imagen);
// una imagen pertenece a un solo producto
db.imagen.belongsTo(db.producto);

// relacion 1 a 1
// una categorias pertenece a un solo producto
db.categorias.belongsTo(db.producto);
// un producto pertenece a una categorias
db.producto.belongsTo(db.categorias);


// relacion 1 a muchos
// un cliente puede tener muchas ventas
db.cliente.hasMany(db.venta);
// una venta pertenece a un solo cliente
db.venta.belongsTo(db.cliente);

// relaciones muchos a muchos
// un carrito puede tener mucho productoxCarrito
db.carrito.hasMany(db.productoxCarrito);
// un producto puede tener muchos productoxCarrito
db.producto.hasMany(db.productoxCarrito);
// un productoxCarrito solo tiene un carrito
db.productoxCarrito.belongsTo(db.carrito)
// un productoxCarrito solo tiene un producto
db.productoxCarrito.belongsTo(db.producto)

// relaciones muchos a muchos
// un producto puede tener mucho ventaxProducto
db.producto.hasMany(db.ventaxProducto);
// un venta puede tener muchos ventaxProducto
db.venta.hasMany(db.ventaxProducto);
// un ventaxProducto solo tiene un producto
db.ventaxProducto.belongsTo(db.producto)
// un ventaxProducto solo tiene un venta
db.ventaxProducto.belongsTo(db.venta)

module.exports = db;
