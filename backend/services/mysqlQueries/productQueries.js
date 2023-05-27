const db = require("../mysql");
const moment = require ("moment");

const productQueries = {};
//añadir imagen
productQueries.addImage = async (imageData) => {
  // Conectamos con la base de datos y añadimos el usuario.
  let conn = null;
  try {
    conn = await db.createConnection();
    // Creamos un objeto con los datos de la imagen a guardar en la base de datos.
    // Usamos la libreria momentjs para registrar la fecha actual
    let imageObj = {
      name: imageData.name,
      path: imageData.path,
      id_product: imageData.idProduct,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query("INSERT INTO images SET ?", imageObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//buscar imagen por id
productQueries.getImageById = async (id) => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM images WHERE id = ?",
      id,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//añadir producto
productQueries.addProduct = async (productData) => {
  console.log(productData);
  let conn = null;
  try {
    conn = await db.createConnection();
    let productObj = {
      nombredelproducto: productData.nombredelproducto,
      detallesdelproducto: productData.detallesdelproducto,
      precio: productData.precio,
      stock: productData.stock,
      referencia: productData.referencia,
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    console.log(productData);
    return await db.query(
      "INSERT INTO productos SET ?",
      productObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//buscar producto por id
productQueries.getProductByReference = async (reference) => {
  // Conectamos con la base de datos y buscamos si existe la imagen por el id.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM productos WHERE referencia = ?",
      reference,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
module.exports = productQueries;
