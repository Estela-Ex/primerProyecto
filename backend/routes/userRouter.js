const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();
//ruta para añadir usuario
userRouter.post("/", userController.addUser);
//ruta para Login de un usuario
userRouter.post("/login", userController.loginUser);
//Borrar un usuario
userRouter.delete("/:id", userController.deleteUser);
// Modificar un usuario por su id
userRouter.patch("/:id", userController.updateUser);











module.exports = userRouter;
