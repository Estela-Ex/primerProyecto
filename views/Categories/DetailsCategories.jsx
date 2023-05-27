import { Grid, Typography } from "@mui/material";
import Cards from "../../components/Cards/Cards";
import Garantias from "../../components/Garantias/Garantias";
import Navmui from "../../components/Navmui/Navmui";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";

export default function DetailsCategories() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      <Typography sx={{ p: 4, m: "3rem 0" }} align="center" variant="h4">
        Todas tus peliculas en blue-Ray
      </Typography>
      <Grid container sx={{ rowGap: 8, p: 2, m: "4rem 0" }}>
        <Cards />
        
      </Grid>

      <Garantias />

      <footer>
        <Grid container sx={{ backgroundColor: "#394F65;" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
