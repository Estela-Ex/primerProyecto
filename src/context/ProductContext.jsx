import { useContext, useState, createContext } from 'react'

const ProductContext = createContext({
    result: "",
    categoriaFetch: () => { }
})
export default function ProductContextProvider({ children }) {
    const [result, setResult] = useState(null)

    async function categoriaFetch(categoria) {
        const response = await fetch(`http://localhost:3001/product/${categoria}`)
        const data = await response.json()
        if (response.status === 200) {
            setResult(data)
        }
    }
    const value = {
        result,
        categoriaFetch
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
export function useProductContext() {
    return useContext(ProductContext)
}