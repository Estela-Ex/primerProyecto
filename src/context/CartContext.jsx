import { useContext, useState, createContext } from 'react'

const CartContext = createContext({
    carrito: 0,
    Cart: () => { },

})
export default function CartContextProvider({ children }) {
    const [carrito, setCarrito] = useState(0)
    const [resultCarrito, setResultCarrito] = useState([])

    function Cart(productos) {
        const newCarrito = {
            id: productos.id,
            nombredelproducto: productos.nombredelproducto,
            detallesdelproducto: productos.detallesdelproducto,
            precio: productos.precio,
            stock: productos.stock,
            categoria: productos.categoria,
            imagen: productos.imagen,
            tipoproducto: productos.tipoproducto
        }
        const auxResutl = [...resultCarrito]
        auxResutl.unshift(newCarrito)
        setResultCarrito(auxResutl)
        setCarrito(carrito+1)
    }
    console.log(carrito);


    const value = {
        carrito,
        Cart
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCartContext() {
    return useContext(CartContext)
}