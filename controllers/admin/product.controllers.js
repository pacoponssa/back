const { where, Op } = require("sequelize");
const db = require("../../models/index");
const producto = db.producto;

exports.obtenerProductos = (req, res) => {
    producto.findAll()
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
    



exports.obtenerProductoPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  producto.findOne({
      where: { idProducto: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Producto encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Producto no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el producto",
        status: 500,
        data: error,
      });
    });
};


exports.crearProducto = (req, res) => {
  const { nombre, precio, cantidad, descripcionCorta, DescripcionLarga, disponible, imagen, caracteristicas, especificaciones } = req.body;

  producto.create({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
      descripcionCorta: descripcionCorta,
      DescripcionLarga: DescripcionLarga,
      disponible: disponible,
      imagen: imagen,
      caracteristicas: caracteristicas,
          especificaciones: especificaciones,
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Producto creado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear el producto",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarProducto = (req, res) => {
    const _id = req.params.id;
    const { nombre, precio, cantidad, descripcionCorta, DescripcionLarga, disponible, imagen, caracteristicas, especificaciones } = req.body;
    producto.update(
        {
          nombre: nombre,
          precio: precio,
          cantidad: cantidad,
          descripcionCorta: descripcionCorta,
          DescripcionLarga: DescripcionLarga,
          disponible: disponible,
          imagen: imagen,
          caracteristicas: caracteristicas,
              especificaciones: especificaciones,
        },
        {
          where: { idProducto: _id },
        }
      )
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Producto actualizado",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al actualizar el producto",
          status: 500,
          data: error,
        });
      });
};

exports.eliminarProducto = (req, res) => {
    const _id = req.params.id;

    producto.destroy({
        where: { idProducto: _id },
      })
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Producto eliminado",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al eliminar el producto",
          status: 500,
          data: error,
        });
      });
};

