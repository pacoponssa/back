const Rutas = require('express').Router();
const controladorCategorias = require('../controllers/categorias.controllers');
// CRUD

// C Create
Rutas.post('/categorias', controladorCategorias.crearCategoria );
// R  Read
Rutas.get('/categorias', controladorCategorias.obtenerCategorias );
Rutas.get('/categorias/:id', controladorCategorias.obtenerCategoriasPorId );
// U Update
Rutas.put('/categorias/:id', controladorCategorias.actualizarCategorias );
// D Delete
Rutas.delete('/categorias/:id', controladorCategorias.eliminarCategoria );

module.exports = Rutas;