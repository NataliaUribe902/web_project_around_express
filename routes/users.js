const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "../data", "users.json");

router.get("/users", (req, res) => {
  fs.readFile(dataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(500).send({ message: "usuarios no encontrados" });
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile(dataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(500).send(`{ "message": "Recurso solicitado no encontrado" }`);
      return;
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === id);

    if (!user) {
      res.status(404).send({ message: "El ID de usuario no existe" });
      return;
    }

    res.send(user);
  });
});

module.exports = router;
