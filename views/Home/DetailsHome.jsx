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

    console.log("recomendado", recomendado)
    console.log("tendencia", tendencia)
    console.log("masvendidos", masvendidos)
    return (
        <Box sx={{margin:"0 auto",width:"90%"}}>
            <Typography
                sx={{ p: 5, m: 5, textAlign: "center", textDecoration: "bold" }}
                variant="h4"
            >Recomendados
            </Typography>
            <Grid container spacing={4} sx={{ m: 3 }}>
                <CardsHome tipoproducto={recomendado} />
            </Grid>
            <Typography
                sx={{ p: 5, mt: 5, textAlign: "center", textDecoration: "bold" }}
                variant="h4"
            >Tendencia
            </Typography>
            <Grid container spacing={4} sx={{ m: 3 }}>
                <CardsHome tipoproducto={tendencia} />
            </Grid>
            <Typography
                sx={{ p: 5, mt: 5, textAlign: "center", textDecoration: "bold" }}
                variant="h4"
            >Mas vendidos
            </Typography>
            <Grid container spacing={4} sx={{ m: 3 }}>
                <CardsHome tipoproducto={masvendidos} />
            </Grid>
        </Box>
    )
}