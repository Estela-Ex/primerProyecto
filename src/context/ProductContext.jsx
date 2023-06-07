import { useContext, useState, createContext } from 'react'

const ProductContext = createContext({
    result: "",
    categoriaFetch: () => { },
    tipoProductoFetch: () => { }
})
export default function ProductContextProvider({ children }) {
    const [result, setResult] = useState(null)
    const [recomendado, setRecomendado] = useState(null)
    const [tendencia, setTendencia] = useState(null)
    const [masvendidos, setMasVendidos] = useState(null)

    async function categoriaFetch(categoria) {
        const response = await fetch(`http://localhost:3001/product/${categoria}`)
        const data = await response.json()
        if (response.status === 200) {
            setResult(data)
        }
    }
    async function tipoProductoFetch(tipoproducto) {
        const response = await fetch(`http://localhost:3001/product/tipo/${tipoproducto}`)
        const data = await response.json()
        if (tipoproducto === 1) {
            setRecomendado(data)
        }
        if (tipoproducto === 2) {
            setTendencia(data)
        }
        if (tipoproducto === 3) {
            setMasVendidos(data)
        }

    }

    const value = {
        result,
        categoriaFetch,
        tipoProductoFetch,
        recomendado,
        tendencia,
        masvendidos
    }
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
export function useProductContext() {
    return useContext(ProductContext)
}