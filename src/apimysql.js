const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/user/:id",function (request, response){
    console.log(request.params.id);
    response.send({nombre: "Pepe", apellidos: "Moron", email: "pepemoron@gmail.com"})
    
})

app.listen(3001, function(){
    console.log("Escuchando al puerto 3001")
})


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ecommerce'
});

connection.connect(function(error) {
    if (error) {
        console.log(`No se ha podido conectar a la base de datos: ${error}`);
    } else {
        console.log("Conectado a mysql!");
    }
});
app.get("/clientes", function(request, response) {
    connection.query("SELECT * FROM clientes", [], function(error, results, fields) {
        if (error) {
            console.log(`Error al ejectuar la query: ${error}`);
        } else {
            response.send(results);
        }
    });
  app.post("/login", function (request, response) {
    console.log(response.request.body, "request");
    connection.query(
      "SELECT * FROM clientes",
      [],
      function (error, results, fields) {
        if (error) {
          console.log(`Error al ejectuar la query: ${error}`);
        } else {
          response.send(results);
        }
      }
    );
  });

});
app.get("/productos", function (request, response) {
  connection.query(
    "SELECT * FROM productos",
    [],
    function (error, results, fields) {
      if (error) {
        console.log(`Error al ejectuar la query: ${error}`);
      } else {
        response.send(results);
      }
    }
  );
});

