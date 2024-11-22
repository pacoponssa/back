const { where } = require("sequelize");
const db = require("../models/index");
const comentarios = db.comentarios;

exports.obtenerComentarios = (req, res) => {
  comentarios
    .findAll()
    .then((registros) => {
      res.status(200).json({
        ok: true,
        msg: "Listado de cometaios",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los comentarios",
        status: 500,
        data: error,
      });
    });
};


exports.crearComentario = (req, res) => {
  const { comentario, ProductoIdProducto  } = req.body;
  comentarios
    .create({
        comentario: comentario,
        ProductoIdProducto:  ProductoIdProducto,
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Comentario creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear el comentario",
        status: 500,
        data: error,
      });
    });
};


exports.eliminarComentario = (req, res) => {
  const _id = req.params.id;
  comentarios
    .destroy({
      where: { idComentario: _id },
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "comentario eliminado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar el comentario",
        status: 500,
        data: error,
      });
    });
};


exports.obtenerComentariosProd = (req, res) => {
    // obtener el parametro id
    const _id = req.params.idProducto;
    comentarios.findAll({
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

// exports.actualizarCategorias = (req, res) => {
//   const _id = req.params.id;
//   const { descripcion } = req.body;
//   comentarios
//     .update(
//       {
//         descripcion: descripcion,
//       },
//       {
//         where: { idCategorias: _id },
//       }
//     )
//     .then((registro) => {
//       res.status(200).json({
//         ok: true,
//         msg: "Categoria actualizada",
//         status: 200,
//         data: registro,
//       });
//     })
//     .catch((error) => {
//       res.status(500).json({
//         ok: false,
//         msg: "Error al actualizar la categoria",
//         status: 500,
//         data: error,
//       });
//     });
// };


// exports.obtenercomentariosPorId = (req, res) => {
//   // obtener el parametro id
//   const _id = req.params.id;

//   comentarios
//     .findOne({
//       where: { idCategorias: _id },
//     })
//     .then((registro) => {
//       if (registro) {
//         res.status(200).json({
//           ok: true,
//           msg: "Categorias encontrado",
//           status: 200,
//           data: registro,
//         });
//       } else {
//         res.status(404).json({
//           ok: false,
//           msg: "Categorias no encontrado",
//           status: 404,
//           data: null,
//         });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({
//         ok: false,
//         msg: "Error al obtener la categoria",
//         status: 500,
//         data: error,
//       });
//     });
// };