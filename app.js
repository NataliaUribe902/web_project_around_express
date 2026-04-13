const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT = 3000 } = process.env;
const routerUsers = require("./routes/users");
const routerCards = require("./routes/cards");

mongoose.connect("mongodb://localhost:27017/aroundb");
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: "69dd15b7ee76bcb906c7a064",
  };

  next();
});
app.use("/", routerUsers);
app.use("/", routerCards);
app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`app running in the port ${PORT}`);
});
