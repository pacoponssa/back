const { where } = require("sequelize");
const db = require("../models/index");
const imagen = db.imagen;

exports.obtenerImagen = (req, res) => {
  imagen.findAll()
    .then((registros) => {

      res.status(200).json({
        ok: true,
        msg: "Listado de imagenes",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener las imagenes",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerImagenPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  imagen.findOne({
      where: { idImagen: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Imagen encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Imagen no encontrada",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener la imagen",
        status: 500,
        data: error,
      });
    });
};


exports.obtenerImagenPorProd = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;
  imagen.findAll({
      where: { ProductoIdProducto: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Imagen encontrada",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Imagen no encontrada",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener la imagen",
        status: 500,
        data: error,
      });
    });
};


exports.crearImagen = (req, res) => {
  const { ubicacion, nroOrden, ProductoIdProducto } = req.body;

  imagen.create({
       ubicacion: ubicacion,
       nroOrden: nroOrden,
       ProductoIdProducto: ProductoIdProducto
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Imagen creada",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear la imagen",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarImagen = (req, res) => {
    const _id = req.params.id;
    const { ubicacion, nroOrden, ProductoIdProducto  } = req.body;
    imagen.update(
        {
            ubicacion: ubicacion,
            nroOrden: nroOrden,
            ProductoIdProducto: ProductoIdProducto
        },
        {
          where: { idImagen: _id },
        }
      )
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Imagen actualizada",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al actualizar la imagen",
          status: 500,
          data: error,
        });
      });
};

exports.eliminarImagen = (req, res) => {
    const _id = req.params.id;

    imagen.destroy({
        where: { idImagen: _id },
      })
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Imagen eliminada",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al eliminar la imagen",
          status: 500,
          data: error,
        });
      });
};

