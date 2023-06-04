import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Garantias from "../../components/Garantias/Garantias";
import Navmui from "../../components/Navmui/Navmui";
import Newsletter from "../../components/Newsletter/Newsletter";
import Privacidad from "../../components/Privacidad/Privacidad";


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
            "button": { height: "5rem", p: "0.3rem 0.8rem", width: "12rem", backgroundColor: "#F8CD8F" },
            "a":{boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)"}
          }}
        >
          <Link to={"/DetailsCategories/1"}>
            <button >Fantastico y Ciencia Ficcion</button>
            </Link>
          <Link to={"/DetailsCategories/2"}>
            <button >Accion y Aventuras</button>
          </Link>
          <Link to={"/DetailsCategories/3"}>
            <button>Series Tv</button>
          </Link>
          <Link to={"/DetailsCategories/4"}>
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
            "button": { height: "5rem", p: "0.3rem 0.8rem", width: "12rem", backgroundColor: "#F8CD8F" },
            "a":{boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)"}
          }}
        >
          <Link to={"/DetailsCategories/5"}>
            <button>Anime</button>
          </Link>
          <Link to={"/DetailsCategories/6"}>
            <button>Terror</button>
          </Link>
          <Link to={"/DetailsCategories/7"}>
            <button>Infantil</button>
          </Link>
          <Link to={"/DetailsCategories/8"}>
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
