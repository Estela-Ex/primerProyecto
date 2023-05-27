import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import {Link} from "react-router-dom"
export default function Menu() {
  return (
    <AppBar
      position="relative"
      sx={{ color: "black", backgroundColor: "unset", boxShadow: "unset" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Grid container>
          <Grid item xl={6}>
            <Grid sx={{pl:3}}container spacing={2}>
              <Grid item>
                <Link to="/">Home</Link>
              </Grid>
              <Grid item>
                <Link href="#">Categorias</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{pr:3}}xl={6}>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Link href="#">Carrito</Link>
              </Grid>
              <Grid item>
                <Link to="/login">Login/Registrate</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}