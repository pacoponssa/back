const Rutas = require('express').Router();
const { authenticateToken } = require('../auth/auth.middleware');  // Importa el middleware de autenticación
const controladorProducto = require('../controllers/producto.controllers');

// CRUD

// C Create
Rutas.post('/', controladorProducto.crearProducto );
// R  Read
Rutas.get('/', controladorProducto.obtenerProductos );
Rutas.get('/:id', controladorProducto.obtenerProductoPorId );
Rutas.get('/descripcion/:idProducto', controladorProducto.obtenerProductoPorId );
// Rutas.get('/producto/:disponible', controladorProducto.obtenerProductoDisponible);
// U Update
Rutas.put('/:id', controladorProducto.actualizarProducto );
// D Delete
Rutas.delete('/:id', controladorProducto.eliminarProducto );

module.exports = Rutas;