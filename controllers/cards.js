const Card = require("../models/card");
module.exports.getCards = (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: err.message });
    });
};
module.exports.deleteCard = (req, res) => {
  Card.findById(req.params.cardId)
    .orFail()
    .then((card) => {
      return Card.findByIdAndDelete(card._id);
    })
    .then((deletedCard) => res.send({ data: deletedCard }))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Tarjeta no encontrada" });
      }
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Id inválido" });
      }
      res.status(500).send({ message: err.message });
    });
};
