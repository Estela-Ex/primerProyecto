const express = require("express");
const accountRouter = express.Router();
const { BBDD } = require("../bbdd");
accountRouter.use((req, res, next) => {
  console.log(
    "Ejecutamos nuestra funcion definida en el middleware de account"
  );
  next();
});
accountRouter.get("/login/:guid", (req, res) => {
  const { guid } = req.params;
  const user = BBDD.find((user) => user.guid === guid);
  // Si no existe el usuario respondemos con un 404 (not found)
  if (!user) return res.status(404).send("La cuenta no existe");
  // Si existe respondemos con los detalles de la cuenta
  res.send(user);
});
accountRouter.post("/login", (req, res) => {});
accountRouter.patch("/login", (req, res) => {});
accountRouter.delete("/login", (req, res) => {});
module.exports = accountRouter;
