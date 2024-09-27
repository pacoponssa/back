const Rutas = require('express').Router();
const controladorImagen = require('../controllers/imagen.controllers');

// CRUD

// C Create
Rutas.post('/', controladorProducto.crearImagen );
// R  Read
Rutas.get('/', controladorProducto.obtenerImagen );
Rutas.get('/:id', controladorProducto.obtenerImagenPorId );
// Rutas.get('/producto/:disponible', controladorProducto.obtenerProductoDisponible);
// U Update
Rutas.put('/:id', controladorProducto.actualizarImagen );
// D Delete
Rutas.delete('/:id', controladorProducto.eliminarImagen );

module.exports = Rutas;