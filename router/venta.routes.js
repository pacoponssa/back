const Rutas = require('express').Router();
const controladorVenta = require('../controllers/venta.controllers');

// CRUD

// C Create
Rutas.post('/', controladorVenta.crearVenta );
// R  Read
Rutas.get('/', controladorVenta.obtenerVenta );
Rutas.get('/:id', controladorVenta.obtenerVentaPorId );
// Rutas.get('/venta/:disponible', controladorVenta.obtenerProductoDisponible);
// U Update
Rutas.put('/:id', controladorVenta.actualizarVenta );
// D Delete
Rutas.delete('/:id', controladorVenta.eliminarVenta );

module.exports = Rutas;