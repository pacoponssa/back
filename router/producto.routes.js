const Rutas = require('express').Router();
const controladorProducto = require('../controllers/producto.controllers');

// CRUD

// C Create
Rutas.post('/producto', controladorProducto.crearProducto );
// R  Read
Rutas.get('/producto', controladorProducto.obtenerProductos );
Rutas.get('/producto/:id', controladorProducto.obtenerProductoPorId );
// Rutas.get('/producto/:disponible', controladorProducto.obtenerProductoDisponible);
// U Update
Rutas.put('/producto/:id', controladorProducto.actualizarProducto );
// D Delete
Rutas.delete('/producto/:id', controladorProducto.eliminarProducto );

module.exports = Rutas;