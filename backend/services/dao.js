const userQueries = require("./mysqlQueries/userQueries");
const productQueries = require("./mysqlQueries/productQueries")
const dao = {};


// DAO PARA USUARIOS



// Buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);
// Añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);
// Buscar un usuario por el id
dao.getUserById = async (id) => await userQueries.getUserById(id);
// Eliminar un usuario
dao.deleteUser = async (id) => await userQueries.deleteUser(id);
// Modificar usuario por su id
dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData);
//añadir imagen
dao.addImage = async (imageData) => await productQueries.addImage(imageData);
// Obtener una imagen por su id
dao.getImageById = async (id) => await productQueries.getImageById(id);
//añadir producto
dao.addProduct = async (productData) =>
  await productQueries.addProduct(productData);
//
dao.getProductByReference = async (reference) =>
  await productQueries.getProductByReference(reference);


// DAO PARA PRODUCTOS
dao.productByCategoria = async (categoria) => await productQueries.getProductByCategoria(categoria)
dao.productByTipoproducto = async(tipoproducto) => await productQueries.getProductByTipoproducto(tipoproducto)
dao.getProductByPelicula = async(pelicula) => await productQueries.getProductByPelicula(pelicula)


    module.exports = dao;
