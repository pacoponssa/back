module.exports = (app) => {
     
    const rutasProducto = require("./producto.routes");
    app.use("/producto", rutasProducto);

    const rutasCliente = require("./cliente.routes");
    app.use("/cliente", rutasCliente);

    const rutasCategoria = require("./categoria.routes");
    app.use("/categoria", rutasCategoria);

    const rutasVenta = require("./venta.routes");
    app.use("/venta", rutasVenta);

    const rutasCarrito = require("./carrito.routes");
    app.use("/carrito", rutasCarrito);
 
   
};