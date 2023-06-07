import { Grid, Typography } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export default function Garantias({ size, color }) {
  return (
    <Grid container sx={{ p: 4 }} alignContent="center" justifyContent="center">
      <Grid item xl={2} display="flex" alignItems="center">
        <GppGoodIcon fontSize="large" color="" />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Pago seguro
        </Typography>
      </Grid>
      <Grid item xl={2} display="flex" alignItems="center">
        <LocalShippingIcon fontSize="large" color="#4c4d4e" />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Envio gratuito
        </Typography>
      </Grid>
      <Grid item xl={2} display="flex" alignItems="center">
        <LocalOfferIcon fontSize="large" color="#4c4d4e" />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Mejores ofertas
        </Typography>
      </Grid>
      <Grid item xl={2} display="flex" alignItems="center">
        <BookmarkIcon fontSize="large" color="#4c4d4e" />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          2 años de garantía
        </Typography>
      </Grid>
    </Grid>
  );
}
