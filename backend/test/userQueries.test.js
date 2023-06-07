const userQueries = require("../services/mysqlQueries/userQueries");


const userObj =
{
    firtname: "Maria",
    lastname: "Gutierrez Hinojsa",
    address: "calle Rio Guadame",
    city: "Málaga",
    postalcode: 29002,
    email: "maria@gmail.com",
    Password: 12345
}

process.env.PORT =
DB_HOST = "localhost"
DB_USER = 'root'
DB_PASS = 'root'
DB_NAME = 'ecommerce'


test("Creacion de usuario ok", async () => {
    const testAddUser = await userQueries.addUser(userObj)
    expect(testAddUser).toBeTruthy()
    try {
        const testErrorAddUser = await userQueries.addUser(userObj)
    } catch(e) {
        expect( e).toBeTruthy()
    }
})
