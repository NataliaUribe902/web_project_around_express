const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;
const routerUsers = require("./routes/users");
const routerCards = require("./routes/cards");

app.use("/", routerUsers);
app.use("/", routerCards);
app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`app running in the port ${PORT}`);
});
