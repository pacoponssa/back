const { where } = require("sequelize");
const db = require("../models/index");
const venta = db.venta;

exports.obtenerVenta = (req, res) => {
  venta.findAll()
    .then((registros) => {

      res.status(200).json({
        ok: true,
        msg: "Listado de productos",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los productos",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerVentaPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  venta.findOne({
      where: { idVenta: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "venta encontrada",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Venta no encontrada",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener la venta",
        status: 500,
        data: error,
      });
    });
};


exports.crearVenta = (req, res) => {
  const { fecha, estado, fechaEnvio, medioPago } = req.body;

  venta.create({
     fecha: fecha,
     estado: estado,
     fechaEnvio: fechaEnvio,
     medioPago: medioPago
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Venta creada",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear la venta",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarVenta = (req, res) => {
    const _id = req.params.id;
    const { fecha, estado, fechaEnvio, medioPago  } = req.body;
    venta.update(
        {
            fecha: fecha,
            estado: estado,
            fechaEnvio: fechaEnvio,
            medioPago: medioPago
        },
        {
          where: { idVenta: _id },
        }
      )
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Venta actualizada",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al actualizar la venta",
          status: 500,
          data: error,
        });
      });
};

exports.eliminarVenta = (req, res) => {
    const _id = req.params.id;

    venta.destroy({
        where: { idVenta: _id },
      })
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Venta eliminada",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al eliminar la venta",
          status: 500,
          data: error,
        });
      });
};

