const Rutas = require('express').Router();
// const { authenticateToken } = require('../auth/auth.middleware');  // Importa el middleware de autenticación
const controladorProductoAd = require('../controllers/admin/product.controllers');

// CRUD

// C Create
Rutas.post('/', controladorProductoAd.crearProducto );
// R  Read
Rutas.get('/', controladorProductoAd.obtenerProductos );
Rutas.get('/:id', controladorProductoAd.obtenerProductoPorId );
Rutas.get('/descripcion/:idProducto', controladorProductoAd.obtenerProductoPorId );
// Rutas.get('/producto/:disponible', controladorProductoAd.obtenerProductoDisponible);
// U Update
Rutas.put('/:id', controladorProductoAd.actualizarProducto );
// D Delete
Rutas.delete('/:id', controladorProductoAd.eliminarProducto );

module.exports = Rutas;