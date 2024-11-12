const { where } = require("sequelize");
const db = require("../models/index");
const categorias = db.categorias;

exports.obtenerCategorias = (req, res) => {
  categorias.findAll()
    .then((registros) => {

      res.status(200).json({
        ok: true,
        msg: "Listado de categorias",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los categorias",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerCategoriasPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  categorias.findOne({
      where: { idCategorias: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Categorias encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Categorias no encontrado",
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

  categorias.create({
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

exports.actualizarCategorias = (req, res) => {
    const _id = req.params.id;
    const { descripcion } = req.body;
    categorias.update(
        {
            descripcion: descripcion
        },
        {
          where: { idCategorias: _id },
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

    categorias.destroy({
        where: { idCategorias: _id },
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

