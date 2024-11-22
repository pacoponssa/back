const Rutas = require('express').Router();
const controladorCupones = require("../controllers/cupon.controllers");
// CRUD

// C Create
Rutas.post('/', controladorCupones.crearCupon );
// R  Read
Rutas.get('/', controladorCupones.obtenerCupones );
Rutas.get('/:id', controladorCupones.obtenerCuponesPorId );
Rutas.get('/codigo', controladorCupones.obtenerCuponesPorCodigo);
// U Update
Rutas.put('/:id', controladorCupones.actualizarCupon );
// D Delete
Rutas.delete('/:id', controladorCupones.eliminarCupon );

module.exports = Rutas;