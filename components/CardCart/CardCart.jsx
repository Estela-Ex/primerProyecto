import {
  Card, CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button
} from '@mui/material'
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useCartContext } from '../../src/context/CartContext';


export default function CardCart({ productos }) {
  const {handleSum, handleRemove} = useCartContext()
 

    return (

    <Grid item xs={12} sm={12} md={12} xl={12} >
      <Card
        sx={{
          width: "100%",
          p: 4,
          height: "15rem",
          border: "1px solid",
          borderRadius: "20px",
          borderStyle: "groove",
          ".title": { padding: "0", textAlign: "center" },
          boxShadow: " 6px 6px 10px 1px grey",
          backgroundColor: "#cdc8c8",
          display: "flex",
          alignItems: "center",

        }}
      >
        <Box sx={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "max-content", columnGap: "1rem", img: { width: "max-content" } }}>
            <CardMedia
              component="img"
              height="280"
              image={productos.imagen}
            />
            <CardHeader className="title" title={productos.nombredelproducto} />
          </Box>
          <Box sx={{
            display: "flex", alignItems: "center", "button": {
              borderRadius: "6px", marginRight: "1rem", width: "10rem", display: "flex", alignItems: "center", ":hover": {
                backgroundColor: "grey",
                color: "white"
              }
            }, "svg": { marginLeft: "0.5rem" }
          }}>
            <Button variant="outlined" sx={{
              width: "1rem !important", backgroundColor: "#fff", fontWeight: "bold", padding: 0,
              fontSize: "1rem",
              margin: "0 !important",
              height: "2rem"
            }} onClick={()=>handleRemove(productos.id)}>-</Button>
            <Box sx={{ input: { width: "3rem" }, m: "0 0.3rem" }}>
              <span>{productos.count}</span>
            </Box>
            <Button variant="outlined" sx={{
              width: "1rem !important", backgroundColor: "#fff", fontWeight: "bold", padding: 0,
              fontSize: "1rem",
              margin: "0 !important",
              height: "2rem"
            }} onClick={()=>handleSum(productos.id)}>+</Button>
            <Box sx={{ ml: "1rem", display: "flex", alignItems: "center" ,width:"4rem"}}>
              {(productos.precio * productos.count).toFixed(2)}
              <EuroIcon fontSize="8" />
            </Box>
          </Box>
        </Box>
        </Card>
        
    </Grid >
  )
}