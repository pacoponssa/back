const Rutas = require('express').Router();
const controladorImagen = require('../controllers/imagen.controllers');

// CRUD
// C Create
Rutas.post('/', controladorImagen.crearImagen );
// R  Read
Rutas.get('/', controladorImagen.obtenerImagen );
Rutas.get('/:id', controladorImagen.obtenerImagenPorId );
Rutas.get('/prod/:id', controladorImagen.obtenerImagenPorProd );

// U Update
Rutas.put('/:id', controladorImagen.actualizarImagen );
// D Delete
Rutas.delete('/:id', controladorImagen.eliminarImagen );

module.exports = Rutas;