const express = require("express");
const users = require("./data/users");
const cards = require("./data/cards");
const app = express();
const { PORT = 3000 } = process.env;

app.get("/users", (req, res) => {
  res.send(users);
});
app.get("/cards", (req, res) => {
  res.send(cards);
});
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u._id === id);
  if (!user) {
    res.status(404).json({ message: "ID de usuario no encontrado" });
    return;
  }

  res.send(user);
});
app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});
app.listen(PORT, () => {
  console.log(`app running in the port ${PORT}`);
});
