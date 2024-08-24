const Rutas = require('express').Router();
const controladorImagen = require('../controllers/imagen.controllers');

// CRUD

// C Create
Rutas.post('/imagen', controladorProducto.crearImagen );
// R  Read
Rutas.get('/imagen', controladorProducto.obtenerImagen );
Rutas.get('/imagen/:id', controladorProducto.obtenerImagenPorId );
// Rutas.get('/producto/:disponible', controladorProducto.obtenerProductoDisponible);
// U Update
Rutas.put('/imagen/:id', controladorProducto.actualizarImagen );
// D Delete
Rutas.delete('/imagen/:id', controladorProducto.eliminarImagen );

module.exports = Rutas;