const moment = require("moment");
const md5 = require("md5"); ;

const db = require("../mysql");

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
  // Conectamos con la base de datos y buscamos si existe el usuario por el email.
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query(
      "SELECT * FROM clientes WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
  
};

userQueries.addUser = async (userData) => {
  console.log(userData);
  let conn = null;
  try {
    conn = await db.createConnection();
    let userObj = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      address: userData.address,
      city: userData.city,
      postalcode: userData.postalcode,
      email: userData.email,
      password: md5(userData.password),
      reg_date: moment().format("YYYY-MM-DD HH:mm:ss"),
      userRole: 0,
    };
    return await db.query(
      "INSERT INTO clientes SET ?",
      userObj,
      "insert",
      conn
    );
    
  } catch (e) {
    console.log(e);
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};
//borrar usuario//
userQueries.deleteUser = async (id) => {
        let conn = null;
        try {
            conn = await db.createConnection();
            return await db.query(
              "delete from clientes where id= ?",
              id,
              "delete",
              conn
            );
        } catch (e) {
            throw new Error(e);
        } finally {
            conn && (await conn.end());
        }
};
    // Buscar usuario por el id
userQueries.getUserById = async (id) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el id.
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('SELECT * FROM clientes WHERE id = ?', id, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
};
// Modificar un usuario por su id
userQueries.updateUser = async (id, userData) => {
     // Conectamos con la base de datos y añadimos el usuario.
     let conn = null
     try {
         conn = await db.createConnection();
         // Creamos un objeto con los datos que nos puede llegar del usuario a modificar en la base de datos.
         // Encriptamos la password con md5 si nos llega por el body, sino la declaramos como undefined
         // y usamos la libreria momentjs para actualizar la fecha.
         let userObj = {
           firstname: userData.firstname,
           lastname: userData.lastname,
           address: userData.address,
           city: userData.city,
           postalcode: userData.postalcode,
           email: userData.email,
           password: md5(userData.password),

           update_date: moment().format("YYYY-MM-DD HH:mm:ss"),
         };
         // Eliminamos los campos que no se van a modificar (no llegan por el body)
         userObj = await utils.removeUndefinedKeys(userObj)

         return await db.query('UPDATE users SET ? WHERE id = ?', [userObj, id], 'update', conn);
     } catch (e) {
        throw new Error(e);
     } finally {
         conn && await conn.end();
     }
};


module.exports = userQueries;