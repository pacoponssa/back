const { where } = require("sequelize");
const db = require("../models/index");
const categoria = db.categoria;

exports.obtenerCategoria = (req, res) => {
  categoria.findAll()
    .then((registros) => {

      res.status(200).json({
        ok: true,
        msg: "Listado de categoria",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los categoria",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerCategoriaPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  categoria.findOne({
      where: { idCategoria: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Categoria encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Categoria no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener la categoria",
        status: 500,
        data: error,
      });
    });
};


exports.crearCategoria = (req, res) => {
  const { descripcion } = req.body;

  categoria.create({
    descripcion: descripcion
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Categoria creada",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear la categoria",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarCategoria = (req, res) => {
    const _id = req.params.id;
    const { categoria } = req.body;
    categoria.update(
        {
            descripcion: descripcion
        },
        {
          where: { idCategoria: _id },
        }
      )
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Categoria actualizada",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al actualizar la categoria",
          status: 500,
          data: error,
        });
      });
};

exports.eliminarCategoria = (req, res) => {
    const _id = req.params.id;

    categoria.destroy({
        where: { idCategoria: _id },
      })
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Categoria eliminada",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al eliminar la categoria",
          status: 500,
          data: error,
        });
      });
};

