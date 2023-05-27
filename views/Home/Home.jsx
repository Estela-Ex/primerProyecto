import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Cards from "../../components/Cards/Cards";
import Navmui from "../../components/Navmui/Navmui";
import Garantias from "../../components/Garantias/Garantias";
import { Grid, Typography } from "@mui/material";



export default function Home() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      <Typography sx={{p:4}} align="center" variant="h4">PRODUCTOS DESTACADOS</Typography>
      <Grid container spacing={4}>
        <Cards />
      </Grid>
      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{ backgroundColor: "#394F65;" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter size={52} color={"white"} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

