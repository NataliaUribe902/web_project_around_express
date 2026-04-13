const routerUsers = require("express").Router();
const { getUsers, getUser, addUser } = require("../controllers/users");
routerUsers.get("/users", getUsers);
routerUsers.get("/users/:id", getUser);
routerUsers.post("/users", addUser);

module.exports = routerUsers;
