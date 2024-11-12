module.exports = (app) => {
     
    const rutasProducto = require("./producto.routes");
    app.use("/producto", rutasProducto);

    const rutasCliente = require("./cliente.routes");
    app.use("/cliente", rutasCliente);

    const rutasCategorias = require("./categorias.routes");
    app.use("/categorias", rutasCategorias);

    const rutasVenta = require("./venta.routes");
    app.use("/venta", rutasVenta);

    const rutasCarrito = require("./carrito.routes");
    app.use("/carrito", rutasCarrito);

    const rutasImagen = require("./imagen.routes");
    app.use("/imagen", rutasImagen);
 
   
};