import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import Navmui from "../../components/Navmui/Navmui";
import Garantias from "../../components/Garantias/Garantias";
import Carousel  from "../../components/Carousel/Carousel";
import { Grid, Typography } from "@mui/material";

import DetailsHome from "./DetailsHome";


export default function Home() {
  
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xl={12}>
          <Navmui />
        </Grid>
      </Grid>
      
      <Carousel/>
      <Grid container spacing={4}>
      <DetailsHome/>
      </Grid>
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
  );
}

