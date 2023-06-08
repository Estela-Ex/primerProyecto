import { useEffect } from "react";
import { useProductContext } from "../../src/context/ProductContext";
import CardsHome from '../../components/CardsHome/CardsHome/'
import { TextField, Typography, Grid, Box } from "@mui/material";



export default function DetailsHome() {
    const { tipoProductoFetch, recomendado, tendencia, masvendidos } = useProductContext()
    useEffect(() => {
        tipoProductoFetch(1)

    }, [])
    useEffect(() => {

        tipoProductoFetch(2)

    }, [])
    useEffect(() => {

        tipoProductoFetch(3)
    }, [])

    return (
        <Box sx={{margin:"0 auto",width:"90%"}}>
            <Typography
                sx={{ p: 5, m: 5, textAlign: "center", textDecoration: "bold", color:"white" }}
                variant="h4"
            >Productos Recomendados
            </Typography>
            <Grid container spacing={4} sx={{ m: 3 }}>
                <CardsHome tipoproducto={recomendado} />
            </Grid>
            <Typography
                sx={{ p: 5, mt: 5, textAlign: "center", textDecoration: "bold", color:"white" }}
                variant="h4"
            >Productos en Tendencia
            </Typography>
            <Grid container spacing={4} sx={{ m: 3 }}>
                <CardsHome tipoproducto={tendencia} />
            </Grid>
            <Typography
                sx={{ p: 5, mt: 5, textAlign: "center", textDecoration: "bold", color:"white" }}
                variant="h4"
            >Productos mas Vendidos
            </Typography>
            <Grid container spacing={4} sx={{ m: 3 }}>
                <CardsHome tipoproducto={masvendidos} />
            </Grid>
        </Box>
    )
}