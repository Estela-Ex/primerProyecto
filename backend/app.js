const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const fileUpload = require("express-fileupload");
const path = require("path");
dotenv.config();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// instanciamos la librería file upload y le añadimos propiedades.
app.use(
  fileUpload({
    createParentPath: true, // Crea la carpeta donde almacenamos las imágenes si no ha sido creada.
    limits: { fileSize: 20 * 1024 * 1024 }, // Limitamos el tamaño de la imagen a 20mb. Por defecto son 50mb.
    abortOnLimit: true, // Interrumpe la carga del archivo si supera el límite especificado.
    responseOnLimit: "Imagen demasiado grande", // Enviamos un mensaje de respuesta cuando se interrumpe la carga
    uploadTimeout: 2000, // Indicamos el tiempo de respuesta si se interrumpe la carga de la imagen.
  })
);

app.use("/user", userRouter);
app.use("/product", productRouter);

module.exports = app;
