const Rutas = require('express').Router();
const controladorCliente = require('../controllers/cliente.controllers');

// CRUD

// C Create
Rutas.post('/', controladorCliente.crearCliente );
// R  Read
Rutas.get('/', controladorCliente.obtenerClientes );
Rutas.get('/:id', controladorCliente.obtenerClientePorId );
// Rutas.get('/cliente/:disponible', controladorCliente.obtenerProductoDisponible);
// U Update
Rutas.put('/:id', controladorCliente.actualizarCliente );
// D Delete
Rutas.delete('/:id', controladorCliente.eliminarCliente );

module.exports = Rutas;