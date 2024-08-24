const Rutas = require('express').Router();
const controladorCarrito = require('../controllers/carrito.controllers');
// CRUD

// C Create
Rutas.post('/carrito', controladorCarrito.crearCarrito );
// R  Read
Rutas.get('/carrito', controladorCarrito.obtenerCarrito );
Rutas.get('/carrito/:id', controladorCarrito.obtenerItemPorId );
// U Update
Rutas.put('/carrito/:id', controladorCarrito.actualizarCarrito );
// D Delete
Rutas.delete('/carrito/:id', controladorCarrito.eliminarItemDelCarrito );

module.exports = Rutas;