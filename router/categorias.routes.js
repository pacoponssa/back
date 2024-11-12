const Rutas = require('express').Router();
const controladorCategorias = require('../controllers/categorias.controllers');
// CRUD

// C Create
Rutas.post('/', controladorCategorias.crearCategoria );
// R  Read
Rutas.get('/', controladorCategorias.obtenerCategorias );
Rutas.get('/:id', controladorCategorias.obtenerCategoriasPorId );
// U Update
Rutas.put('/:id', controladorCategorias.actualizarCategorias );
// D Delete
Rutas.delete('/:id', controladorCategorias.eliminarCategoria );

module.exports = Rutas;