import {
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Grid,
    Box,
  } from "@mui/material";
  import EuroIcon from "@mui/icons-material/Euro";
  import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
  
  export default function CategorieCards({tipoproducto}) {
      
    return (
      <>
        {tipoproducto?.map((productos, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={4} xl={3} >
              <Card
                sx={{
                  maxWidth: 345,
                  p: 4,
                  height:"35rem",
                  border: "1px solid",
                  borderRadius: "20px",
                  borderStyle: "groove",
                  ".title": { padding: "0", textAlign: "center" },
                  boxShadow:" 6px 6px 10px 1px grey",
                  backgroundColor: "#cdc8c8"
  
                }}
              >
                <CardHeader className="title" key={i} title={productos.nombredelproducto} />
                <CardMedia
                  component="img"
                  height="280"
                  image={productos.imagen}
                />
                <Typography variant="subtitle" color="#fff"></Typography>
                <CardContent>
                  <Typography sx={{ "p": { height: "6rem", overflowY: "auto" }}} variant="body2" color="#fff">
                    {productos.detallesdelproducto}
                  </Typography>
                  <br />
                  <Box sx={{display:"flex",alignItems:"center","button":{borderRadius:"6px", marginRight:"1rem",width:"10rem" , display:"flex", alignItems:"center",":hover":{backgroundColor: "#547963",
                   color: "white"}},"svg":{marginLeft:"0.5rem"}}}>
                  <button>
                    Añadir al carrito
                    <ShoppingBasketIcon
                      fontSize="18"
                      sx={{ align: "right" }}
                    />
                    </button>
                  {productos.precio}
                  <EuroIcon fontSize="8" />
                    </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </>
    );
  }
  