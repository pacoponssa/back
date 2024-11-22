const { where } = require("sequelize");
const db = require("../models/index");
const usuario = db.usuario;

exports.obtenerUsuarios = (req, res) => {
  usuario
    .findAll()
    .then((registros) => {
      res.status(200).json({
        ok: true,
        msg: "Listado de usuario",
        status: 200,
        data: registros,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener los usuario",
        status: 500,
        data: error,
      });
    });
};

exports.obtenerUsuarioPorId = (req, res) => {
  // obtener el parametro id
  const _id = req.params.id;

  usuario
    .findOne({
      where: { idUsuario: _id },
    })
    .then((registro) => {
      if (registro) {
        res.status(200).json({
          ok: true,
          msg: "Usuario encontrado",
          status: 200,
          data: registro,
        });
      } else {
        res.status(404).json({
          ok: false,
          msg: "Usuario no encontrado",
          status: 404,
          data: null,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al obtener el Usuario",
        status: 500,
        data: error,
      });
    });
};

exports.crearUsuario = (req, res) => {
  const { username, password } = req.body;

  usuario
    .create({
        username: username,
      password: password,
    })
    .then((registro) => {
      res.status(201).json({
        ok: true,
        msg: "Usuario creado",
        status: 201,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al crear el Usuario",
        status: 500,
        data: error,
      });
    });
};

exports.actualizarUsuario = (req, res) => {
  const _id = req.params.id;
  const { username, password } = req.body;
  usuario
    .update(
      {
        username: username,
        password: password,
      },
      {
        where: { idUsuario: _id },
      }
    )
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Usuario actualizado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al actualizar el Usuario",
        status: 500,
        data: error,
      });
    });
};

exports.eliminarUsuario = (req, res) => {
  const _id = req.params.id;

  usuario
    .destroy({
      where: { idUsuario: _id },
    })
    .then((registro) => {
      res.status(200).json({
        ok: true,
        msg: "Usuario eliminado",
        status: 200,
        data: registro,
      });
    })
    .catch((error) => {
      res.status(500).json({
        ok: false,
        msg: "Error al eliminar el Usuario",
        status: 500,
        data: error,
      });
    });
};
