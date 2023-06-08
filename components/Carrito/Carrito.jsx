import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import { useCartContext } from "../../src/context/CartContext";
import { Link } from "react-router-dom";


export default function Carrito() {
  const { carrito } = useCartContext()
  return (


    <Link to={"/Cart"}> <Button variant="contained" size="large" endIcon={<Badge badgeContent={carrito} color="secondary" sx={{ backgroundColor: "grey" }}><ShoppingCartIcon /></Badge>} sx={{ m: 2, mt: 5, ml: "25%" }}> Carrito</Button></Link>
  )
}

