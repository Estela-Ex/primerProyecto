import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Navmui from "../../components/Navmui/Navmui";
import Garantias from "../../components/Garantias/Garantias";
import CardCart from '../../components/CardCart/CardCart'
import { Grid, Box, Button } from "@mui/material";
import { useCartContext } from '../../src/context/CartContext'


export default function Cart() {
  const { resultCarrito } = useCartContext()
  const total = resultCarrito.reduce((acc, curr) => acc + Number(curr.precio)*curr.count, 0)
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center" >
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      {resultCarrito.length ? <>
        <Grid container spacing={2} sx={{ mt: "4rem", p: "2rem" }}>
          {resultCarrito?.map((productos, i) => <CardCart key={i} productos={productos} />)}
        </Grid>
        <Grid container justifyContent={"flex-end"}>
          <Grid xl={2} >
        <Box sx={{ height: "4rem", width: "100%", display: "flex", justifyContent: "flex-start", span: { mr: "2rem", fontSize: "1.5rem", fontWeight: "bold", color: "black" } }}>
          <span>Total: {`${total.toFixed(2)}`}</span>
            </Box>
            </Grid>
          <Grid container justifyContent={"flex-end"}>
          <Grid xl={1} sx={{ height: "4rem", width: "100%", button: { borderRadius: "0.5rem", display: "flex", justifyContent: "center" } }}>
            <button >Seguir comprando</button>
          </Grid>
          <Grid xl={1} sx={{ height: "4rem", width: "100%", button: { borderRadius: "0.5rem", display: "flex", justifyContent: "center" } }} >
            <button>Pagar</button>
            </Grid>
          </Grid>
        </Grid> </> : <Box sx={{ height: "18rem", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", span: { mr: "2rem", fontSize: "1.5rem", fontWeight: "bold", color: "black" } }} > <span>Aún no tienes ningún producto añadido a tu carrito</span></Box>}
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