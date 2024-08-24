const { where } = require("sequelize");
const db = require("../models/index");
const Carrito = db.Carrito; // Modelo del carrito

// Obtener todos los ítems en el carrito
exports.obtenerCarrito = (req, res) => {
  Carrito.findAll()

    .then((registros) => {
      res.status(200).json({
        ok: true,
        msg: "Listado de ítems en el carrito",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los ítems del carrito",
        status: 500,
        data: error,
      });
    });
};

// Obtener un ítem del carrito por su ID
exports.obtenerItemPorId = (req, res) => {
  const _id = req.params.id;

  Carrito.findOne({
      where: { idCarrito: _id }
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Ítem encontrado en el carrito",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Ítem no encontrado en el carrito",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el ítem del carrito",
        status: 500,
        data: error,
      });
    });
};

// Agregar un producto al carrito
exports.crearCarrito = (req, res) => {
  const { idProducto, total } = req.body;

  Carrito.create({
      idProducto: idProducto,
      total: total,
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Producto agregado al carrito",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al agregar el producto al carrito",
        status: 500,
        data: error,
      });
    });
};

// Actualizar la cantidad de un producto en el carrito
exports.actualizarCarrito = (req, res) => {
  const _id = req.params.id;
  const { total } = req.body;

  Carrito.update(
      { total: total },
      { where: { idCarrito: _id } }
    )
    .then((registro) => {
      if (registro[0] === 0) {
        res.status(404).json({
          ok: false,
          msg: "Ítem no encontrado en el carrito",
          status: 404,
          data: null,
        });
      } else {
        res.status(200).json({
          ok: true,
          msg: "Total actualizado en el carrito",
          status: 200,
          data: registro,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar el total en el carrito",
        status: 500,
        data: error,
      });
    });
};

// Eliminar un producto del carrito
exports.eliminarItemDelCarrito = (req, res) => {
  const _id = req.params.id;

  Carrito.destroy({
      where: { idCarrito: _id },
    })
    .then((registro) => {
      if (registro === 0) {
        res.status(404).json({
          ok: false,
          msg: "Ítem no encontrado en el carrito",
          status: 404,
          data: null,
        });
      } else {
        res.status(200).json({
          ok: true,
          msg: "Producto eliminado del carrito",
          status: 200,
          data: registro,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar el producto del carrito",
        status: 500,
        data: error,
      });
    });
};
