const Rutas = require('express').Router();
const controladorCarrito = require('../controllers/carrito.controllers');
// CRUD

// C Create
Rutas.post('/', controladorCarrito.crearCarrito );
// R  Read
Rutas.get('/', controladorCarrito.obtenerCarrito );
Rutas.get('/:id', controladorCarrito.obtenerItemPorId );
// U Update
Rutas.put('/:id', controladorCarrito.actualizarCarrito );
// D Delete
Rutas.delete('/:id', controladorCarrito.eliminarItemDelCarrito );

module.exports = Rutas;