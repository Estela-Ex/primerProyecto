import { Grid, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export default function Garantias({ size, color }) {
  return (
    <Grid container sx={{ p: 4 }} alignContent="center" justifyContent="center">
      <Grid item xl={2} display="flex" alignItems="center">
        <GppGoodIcon fontSize="large" sx={{color:"#fff"}} />
        <Typography variant="h6" sx={{ textAlign: "center", color:"white" }}>
          Pago seguro
        </Typography>
      </Grid>
      <Grid item xl={2} display="flex" alignItems="center">
        <LocalShippingIcon fontSize="large" sx={{color:"#fff"}} />
        <Typography variant="h6" sx={{ textAlign: "center",color:"white" }}>
          Envio gratuito
        </Typography>
      </Grid>
      <Grid item xl={2} display="flex" alignItems="center">
        <LocalOfferIcon fontSize="large" sx={{color:"#fff"}}  />
        <Typography variant="h6" sx={{ textAlign: "center",color:"white" }}>
          Mejores ofertas
        </Typography>
      </Grid>
      <Grid item xl={2} display="flex" alignItems="center">
        <BookmarkIcon fontSize="large" sx={{color:"#fff"}} />
        <Typography variant="h6" sx={{ textAlign: "center",color:"white" }}>
          2 años de garantía
        </Typography>
      </Grid>
    </Grid>
  );
}
