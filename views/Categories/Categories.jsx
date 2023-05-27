import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Garantias from "../../components/Garantias/Garantias";
import Navmui from "../../components/Navmui/Navmui";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";
import DetailsCategories from "./DetailsCategories";
export default function Categories() {
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
        <Grid
          item
          xs={12}
          sx={{
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            columnGap: "4rem",
            "button": { height: "5rem", p: "0.3rem 0.8rem", width: "12rem" },
          }}
        >
          <Link to={"/DetailsCategories"}>
            <button>Fantastico y Ciencia Ficcion</button>
          </Link>
          <Link to={"/DetailsCategories"}>
            <button>Accion y Aventuras</button>
          </Link>
          <Link to={"/DetailsCategories"}>
            <button>Series Tv</button>
          </Link>
          <Link to={"/DetailsCategories"}>
            <button>Drama</button>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            columnGap: "4rem",
            "button": { height: "5rem", p: "0.3rem 0.8rem", width: "12rem" },
          }}
        >
          <Link to={"/DetailsCategories"}>
            <button>Anime</button>
          </Link>
          <Link to={"/DetailsCategories"}>
            <button>Terror</button>
          </Link>
          <Link to={"/DetailsCategories"}>
            <button>Infantil</button>
          </Link>
          <Link to={"/DetailsCategories"}>
            <button>Comedia</button>
          </Link>
        </Grid>
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
