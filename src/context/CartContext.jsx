import { useContext, useState, createContext } from "react";

const CartContext = createContext({
    carrito: 0,
    Cart: () => { },
    resultCarrito: [],
    handleSum: () => { },
    handleRemove: () => { },

});
export default function CartContextProvider({ children }) {
    const [carrito, setCarrito] = useState(0);
    const [resultCarrito, setResultCarrito] = useState([]);

    function handleSum(id) {
        const newCarrito = resultCarrito.map((elem) => {
            if (elem.id === id) {
                elem.count += 1
            }
            return elem
        })
        setResultCarrito(newCarrito)
        setCarrito(carrito + 1)
    }
    function handleRemove(id) {
        const newCarrito = []
        resultCarrito.forEach((elem) => {
            if (elem.id === id && elem.count > 0) {
                setCarrito(carrito - 1)
                if (elem.count === 1) {
                    return 
                } else {
                    elem.count -= 1
                }
            }
            return newCarrito.push(elem)
        })
        setResultCarrito(newCarrito)
    }
    function Cart(productos) {
        const comprobarCarrito = resultCarrito.filter((elem) => elem.id === productos.id);
        if (comprobarCarrito.length > 0) {
            const newCarrito = resultCarrito.map((e) => {
                if (e.id === productos.id) {
                    e.count += 1;

                }
                return e;
            });
        } else {
            setResultCarrito([...resultCarrito, { ...productos, count: 1 }]);
        }
        setCarrito(carrito + 1);
    }
    const value = {
        carrito,
        Cart,
        resultCarrito,
        handleSum,
        handleRemove,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCartContext() {
    return useContext(CartContext);
}
