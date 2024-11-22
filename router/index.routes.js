module.exports = (app) => {
     
    const rutasProducto = require("./producto.routes");
    app.use("/producto", rutasProducto);

    const rutasProductoAdmin = require("./productAdmin.routes.js");
    app.use("/productoAd", rutasProductoAdmin);

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

    const rutasAuth = require("./auth.routes");
    app.use("/auth", rutasAuth);   

    const rutasUsuario = require("./usuario.routes");
    app.use("/usuario", rutasUsuario);

    const rutasCupon = require("./cupon.routes");
    app.use("/cupon", rutasCupon);

    const rutasComentarios = require("./comentarios.routes");
    app.use("/comentarios", rutasComentarios);

};