const routerCards = require("express").Router();
const { createCard, deleteCard, getCards } = require("../controllers/cards");

routerCards.get("/cards", getCards);
routerCards.post("/cards", createCard);
routerCards.delete("/cards/:cardId", deleteCard);
module.exports = routerCards;
