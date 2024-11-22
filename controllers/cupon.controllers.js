const { where } = require("sequelize");
const db = require("../models/index");
const cupones = db.cupon;

exports.obtenerCupones = (req, res) => {
  cupones
    .findAll()
    .then((registros) => {
      res.status(200).json({
        ok: true,
        msg: "Listado de cupones",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los cupones",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerCuponesPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  cupones
    .findOne({
      where: { idCupon: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Cupon encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Cupon no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el cupon",
        status: 500,
        data: error,
      });
    });
};

exports.crearCupon = (req, res) => {
  const { codigo, descuento } = req.body;

  cupones
    .create({
      codigo: codigo,
      descuento: descuento,
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Cupon creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear la cupon",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarCupon = (req, res) => {
  const _id = req.params.id;
  const { codigo, descuento } = req.body;
  cupones
    .update(
      {
        codigo: codigo,
        descuento: descuento,
      },
      {
        where: { idCupon: _id },
      }
    )
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Cupon actualizado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar la cupon",
        status: 500,
        data: error,
      });
    });
};

exports.eliminarCupon = (req, res) => {
  const _id = req.params.id;

  cupones
    .destroy({
      where: { idCupon: _id },
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Cupon eliminado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar el cupon",
        status: 500,
        data: error,
      });
    });
};


exports.obtenerCuponesPorCodigo = (req, res) => {
  // obtener el parametro id
  const _codigo = req.params.codigo;

  cupones
    .findOne({
      where: { codigo: _codigo },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Cupon encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Cupon no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el cupon",
        status: 500,
        data: error,
      });
    });
};