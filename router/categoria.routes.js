const Rutas = require('express').Router();
const controladorCategoria = require('../controllers/categoria.controllers');
// CRUD

// C Create
Rutas.post('/', controladorCategoria.crearCategoria );
// R  Read
Rutas.get('/', controladorCategoria.obtenerCategoria );
Rutas.get('/:id', controladorCategoria.obtenerCategoriaPorId );
// U Update
Rutas.put('/:id', controladorCategoria.actualizarCategoria );
// D Delete
Rutas.delete('/:id', controladorCategoria.eliminarCategoria );

module.exports = Rutas;