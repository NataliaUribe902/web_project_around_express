const routerUsers = require("express").Router();
const {
  getUsers,
  getUser,
  addUser,
  updateAvatar,
  updateUser,
} = require("../controllers/users");
routerUsers.get("/users", getUsers);
routerUsers.get("/users/:id", getUser);
routerUsers.post("/users", addUser);
routerUsers.patch("/users/me", updateUser);
routerUsers.patch("/users/me/avatar", updateAvatar);

module.exports = routerUsers;
