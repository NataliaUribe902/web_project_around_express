const express = require("express");
const cards = require("./data/cards");
const app = express();
const { PORT = 3000 } = process.env;
const router = require("./routes/users");

app.get("/cards", (req, res) => {
  res.send(cards);
});
app.use("/", router);
app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`app running in the port ${PORT}`);
});
