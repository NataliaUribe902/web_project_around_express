const User = require("../models/user");
module.exports.getUsers = (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
module.exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .orFail()
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id inválido" });
      }
      res.status(500).send({ message: err.message });
    });
};
module.exports.addUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      res.status(500).send({ message: err.message });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true },
  )
    .orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id inválido" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Usuario no encontrado" });
      }
      res.status(500).send({ message: err.message });
    });
};
