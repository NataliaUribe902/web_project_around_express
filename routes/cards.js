const routerCards = require("express").Router();
const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "../data", "cards.json");
routerCards.get("/cards", (req, res) => {
  fs.readFile(dataPath, { encodig: "utf-8" }, (err, data) => {
    if (err) {
      res.status(500).send({ message: "ID de card no encontrada" });
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});
module.exports = routerCards;
