import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Navmui from "../../components/Navmui/Navmui";
import Garantias from "../../components/Garantias/Garantias";
import CardCart from '../../components/CardCart/CardCart'
import { Grid,Box } from "@mui/material";
import { useCartContext } from '../../src/context/CartContext'


export default function Cart() {
  const { resultCarrito } = useCartContext()
  const total = resultCarrito.reduce((acc,curr) => {
    const precio = Number(curr.precio)
    acc += curr.count * precio
  }, 0)
  console.log(total);
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: "3rem" }}>
        {resultCarrito?.map((productos, i) => <CardCart key={i} productos={productos} />)}
      </Grid>
      {resultCarrito.length? <Box sx={{height:"4rem",width:"100%",backgroundColor: "#4c4d4e", display:"flex",justifyContent:"flex-end",span:{mr:"2rem", fontSize:"1.5rem", fontWeight:"bold",color:"white"}}}>
        <span>Total: {total}</span>
      </Box> : <Box sx={{ height: "18rem", width: "100%", backgroundColor: "#4c4d4e", display: "flex", justifyContent: "center", alignItems:"center", span: { mr: "2rem", fontSize: "1.5rem", fontWeight: "bold", color: "white" } } } ><span>Aún no tienes nada añadido a tu carrito</span></Box>}
      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{ backgroundColor: "#4c4d4e" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter size={52} color={"white"} />
          </Grid>
        </Grid>
      </footer>
    </>
  )
}