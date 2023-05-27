import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Carrito() {
  return (
    <Button variant="contained" size="large" endIcon={<ShoppingCartIcon/>} sx={{m:2, mt:5, ml:"25%"}}>Carrito</Button>
  );
}

