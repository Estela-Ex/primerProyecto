import { Grid } from "@mui/material";
import Garantias from "../../components/Garantias/Garantias";
import Navmui from "../../components/Navmui/Navmui";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import BasicFormRegistro from "../../src/components/BasicFormRegistro/BasicFormRegistro";


export default function Registre() {
  
  return (
    <>
      <header>
        <Navmui />
      </header>
      <Grid container spacing={12} p={10} sx={{ justifyContent: "center" }}>
        <Grid item xs={6} p={12}>
          <BasicFormRegistro />
        </Grid>
      </Grid>
      <Garantias size={48} color={"pink"} />
      <footer>
        <Grid container sx={{ backgroundColor: "#1C4E81;" }}>
          <Grid item xs={6} sx={{ pl: 20, pt: 10, pb: 10 }}>
            <Privacidad size={28} />
          </Grid>
          <Grid item xs={6} sx={{ pl: 28, pt: 10, pb: 10 }}>
            <Newsletter size={52} color={"black"} />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}