const Rutas = require('express').Router();
const controladorVenta = require('../controllers/venta.controllers');

// CRUD

// C Create
Rutas.post('/imagen', controladorVenta.crearVenta );
// R  Read
Rutas.get('/imagen', controladorVenta.obtenerVenta );
Rutas.get('/venta/:id', controladorVenta.obtenerVentaPorId );
// Rutas.get('/venta/:disponible', controladorVenta.obtenerProductoDisponible);
// U Update
Rutas.put('/venta/:id', controladorVenta.actualizarVenta );
// D Delete
Rutas.delete('/venta/:id', controladorVenta.eliminarVenta );

module.exports = Rutas;