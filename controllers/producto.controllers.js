const { where, Op } = require("sequelize");
const db = require("../models/index");
const producto = db.producto;

// exports.obtenerProductos = (req, res) => {
//   // Parámetros
//   const pagina = parseInt(req.query.pagina);
//   const cantidad = parseInt(req.query.cantidad);
//   const text = req.query.searchTerm;
//   const categories = parseInt(req.query.categories);
//   const rangoPrecio = req.query.rangoPrecio;
//   const verDisponibles = req.query.verDisponibles === 'true'; // Convertir a booleano

//   console.log("llega a lista", rangoPrecio);

//   let whereFilter = {};

//   if (
//     (text && text.length > 0) ||
//     (categories && categories != 0) ||
//     (rangoPrecio && rangoPrecio.length > 1) ||
//     verDisponibles
//   ) {
//     whereFilter[Op.and] = [];

//     if (text && text.length > 0) {
//       whereFilter[Op.and].push({
//         nombre: { [Op.like]: `%${text}%` },
//       });
//     }

//     if (categories && categories > 0) {
//       whereFilter[Op.and].push({
//         CategoriaIdCategorias: categories,
//       });
//     }

//     if (rangoPrecio && rangoPrecio.length > 1) {
//       const rangoPrecioVector = rangoPrecio.split(",");
//       whereFilter[Op.and].push({
//         precio: { [Op.between]: [parseInt(rangoPrecioVector[0]), parseInt(rangoPrecioVector[1])] },
//       });
//     }

//     if (verDisponibles) {
//       whereFilter[Op.and].push({
//         disponible: true, // Filtra solo los productos disponibles
//       });
//     }
//   }

//   producto.findAndCountAll({
//     where: whereFilter,
//     offset: (pagina - 1) * cantidad,
//     limit: cantidad
//   })
//   .then((registros) => {
//     res.status(200).json({
//       ok: true,
//       msg: "Listado de productos",
//       status: 200,
//       data: registros,
//     });
//   })
//   .catch((error) => {
//     res.status(500).json({
//       ok: false,
//       msg: "Error al obtener los productos",
//       status: 500,
//       data: error,
//     });
//   });
// };


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
  const { nombre, precio, cantidad, descripcionCorta, DescripcionLarga, disponible, imagen } = req.body;

  producto.create({
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
      descripcionCorta: descripcionCorta,
      DescripcionLarga: DescripcionLarga,
      disponible: disponible,
      imagen: imagen,
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
    const { nombre, precio, cantidad, descripcionCorta, DescripcionLarga, disponible, imagen } = req.body;
    producto.update(
        {
          nombre: nombre,
          precio: precio,
          cantidad: cantidad,
          descripcionCorta: descripcionCorta,
          DescripcionLarga: DescripcionLarga,
          disponible: disponible,
          imagen: imagen,
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

