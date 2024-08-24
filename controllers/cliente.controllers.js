const { where } = require("sequelize");
const db = require("../models/index");
const cliente = db.cliente;

exports.obtenerClientes = (req, res) => {
  cliente.findAll()
    .then((registros) => {

      res.status(200).json({
        ok: true,
        msg: "Listado de clientes",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los clientes",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerClientePorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  cliente.findOne({
      where: { idCliente: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Cliente encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Cliente no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el cliente",
        status: 500,
        data: error,
      });
    });
};


exports.crearCliente = (req, res) => {
  const { nombre, apellido, email, contraseña, telefono, usuario } = req.body;

  cliente.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      contraseña: contraseña,
      telefono: telefono,
      usuario: usuario,
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Cliente creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear el cliente",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarCliente = (req, res) => {
    const _id = req.params.id;
    const { nombre, apellido, email, contraseña, telefono, usuario } = req.body;
    cliente.update(
        {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contraseña: contraseña,
            telefono: telefono,
            usuario: usuario
        },
        {
          where: { idCliente: _id },
        }
      )
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Cliente actualizado",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al actualizar el cliente",
          status: 500,
          data: error,
        });
      });
};

exports.eliminarCliente = (req, res) => {
    const _id = req.params.id;

    cliente.destroy({
        where: { idCliente: _id },
      })
      .then((registro) => {
        res.status(200).json({
          ok: true,
          msg: "Cliente eliminado",
          status: 200,
          data: registro,
        });
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al eliminar el cliente",
          status: 500,
          data: error,
        });
      });
};

