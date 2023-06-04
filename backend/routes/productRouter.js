const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();

// Subir una o varias imágenes al servidor y base de datos
productRouter.post("/upload", productController.uploadImage);
//buscar imagen por su id
productRouter.get("/image/:id", productController.getImage);
//añadir producto
productRouter.post("/", productController.addProduct);
//buscar productos bbdd por categorias
productRouter.get("/:categoria", productController.productByCategoria)











module.exports = productRouter;
