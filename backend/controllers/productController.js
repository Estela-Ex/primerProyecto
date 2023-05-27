const path = require("path")
const dao = require("../services/dao");
const productController = {};


// controlador para subir una o varias imágenes a nuestro servidor y base de datos
productController.uploadImage = async (req, res) => {
    console.log(req.files);
    try {
      // Controlamos cuando el objeto files sea null
      // Controlamos si nos viene algún tipo de archivo en el objeto files
      if (!req.files ||req.files ===null|| Object.keys(req.files).length === 0) {
        return res.status(400).send("No se ha cargado ningún archivo");
      }
      // 1 archivo [{}] , >1 archivo [[{},{},...]]
      // Obtenemos un array de objetos con todas las imagenes
      const images = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen;
      // Recorremos el array para procesar cada imagen
      images.forEach(async (image) => {
        // Ya podemos acceder a las propiedades del objeto image.
        // Obtenemos la ruta de la imagen.
        let uploadPath = path.join(
          __dirname,
          "../public/product/" + image.name
        );
        // Usamos el método mv() para ubicar el archivo en nuestro servidor
        image.mv(uploadPath, (err) => {
          if (err) return res.status(500).send(err);
        });
        await dao.addImage({ name: image.name, path: uploadPath });
      });
      return res.send("Imagen subida!");
    } catch (e) {
      console.log(e.message);
      return res.status(400).send(e.message);
    }
  };
// Controlador para obtener una imagen por su id
productController.getImage = async (req, res) => {
  try {
    // Buscamos si el id de la imagen existe en la base de datos
    const image = await dao.getImageById(req.params.id);
    // Si no existe devolvemos un 404 (not found)
    if (image.length <= 0) return res.status(404).send("La imagen no existe");
    // Devolvemos la ruta donde se encuentra la imagen
    return res.send(image[0].path);
  } catch (e) {
    console.log(e.message);
    return res.status(400).send(e.message);
  }

};
productController.addProduct = async (req, res) => {
  const { nombredelproducto, detallesdelproducto, precio, stock, referencia } = req.body;
  // Si no alguno de estos campos recibidos por el body devolvemos un 400 (bad request)
  if (!nombredelproducto || !detallesdelproducto || !precio || !stock ||!referencia)
    return res.status(400).send("Error al recibir el body");
  // Buscamos el producto en la base de datos
  try {
    const product = await dao.getProductByReference(referencia);
    console.log(product);
    // Si existe el producto respondemos con un 409 (conflict)
    if (product.length > 0) return res.status(409).send("ya existe el producto");
    // Si no existe lo registramos
    console.log(req.body);
    const addProduct = await dao.addProduct(req.body);
    if (
      !req.files ||
      req.files === null ||
      Object.keys(req.files).length === 0
    ) {
      return res.status(400).send("No se ha cargado ningún archivo");
    }
    // 1 archivo [{}] , >1 archivo [[{},{},...]]
    // Obtenemos un array de objetos con todas las imagenes
    const images = !req.files.imagen.length
      ? [req.files.imagen]
      : req.files.imagen;
    // Recorremos el array para procesar cada imagen
    images.forEach(async (image) => {
      // Ya podemos acceder a las propiedades del objeto image.
      // Obtenemos la ruta de la imagen.
      let uploadPath = path.join(__dirname, "../public/product/" + image.name);
      // Usamos el método mv() para ubicar el archivo en nuestro servidor
      image.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);
      });
      await dao.addImage({
        name: image.name,
        path: uploadPath,
        idProduct: addProduct,
      });
    });
    if (addProduct)
      return res.send(
        `El producto ${nombredelproducto} con id: ${addProduct} registrado`
      );
  } catch (e) {
    throw new Error(e);
    console.log(e.message);
  }
};

module.exports = productController;
