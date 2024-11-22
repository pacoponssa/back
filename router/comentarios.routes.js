const Rutas = require('express').Router();
const controladorComentarios = require('../controllers/comentarios.controllers');
// CRUD

// C Create
Rutas.post('/', controladorComentarios.crearComentario );
// R  Read
Rutas.get('/', controladorComentarios.obtenerComentarios );
Rutas.get('/prod/:idProducto', controladorComentarios.obtenerComentariosProd );
// Rutas.get('/:id', controladorComentarios.obtenerCategoriasPorId );
// U Update
// Rutas.put('/:id', controladorComentarios.actualizarCategorias );
// D Delete
Rutas.delete('/:id', controladorComentarios.eliminarComentario );

module.exports = Rutas;