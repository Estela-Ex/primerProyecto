const userQueries = require("../services/mysqlQueries/userQueries");

// test confirmar añadir usuario
const userObj =
{
    firstname: "Maria",
    lastname: "Gutierrez Hinojsa",
    address: "calle Rio Guadame",
    city: "Málaga",
    postalcode: 29002,
    email: "maria2@gmail.com",
    password: 12345
}


process.env.DB_HOST = "localhost"
process.env.DB_USER = 'root'
process.env.DB_PASS = 'root'
process.env.DB_NAME = 'ecommerce'


test("Creacion de usuario ok", async () => {
    const testAddUser = await userQueries.addUser(userObj)
    expect(testAddUser).toBeTruthy()
})
test("Usuario no existe", async () => {


    try {
        const testErrorAddUser = await userQueries.addUser(userObj)
    } catch (e) {
        expect(e).toBeTruthy()
    }

})
//test confirmar login usuario
const email = "maria@gmail.com"

test("Confirmar usuario por email", async () => {
    const testLoginUser = await userQueries.getUserByEmail(email)
    expect(testLoginUser).toHaveLength(1)

})
const emailNoExiste = "maria2585@gmail.com"

test("Confirmar que el email no existe", async () => {
    try {
        const testErrorLoginUser = await userQueries.getUserByEmail(emailNoExiste)
    } catch (e) {
        expect(e).toBeTruthy()
    }
})

