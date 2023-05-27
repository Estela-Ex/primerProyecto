//LLAMADA FETCH COMO EL TIENE HECHA EN LA DIAPOSITIVA A LOCALHOST:8000/PRODUCTOS
//traerse el response a nuestro proyecto// primero que salga en un console.log y dspues me preocupaba de que 
//apareciese en los productos
import {useState, useEffec, useEffect} from "react"

export default function Catalogo({nombre, detalles, material, precio}){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        console.log("Me renderizo!!!")
        fetch("http://localhost:8000/productos")
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
    }, [])

    return(      
        products.map((product, index)=>{
            <li key={index}>{product}</li>

        })

        
    )
}