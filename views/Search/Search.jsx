
import { Grid } from "@mui/material";
import CardsHome from "../../components/CardsHome/CardsHome";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Garantias from "../../components/Garantias/Garantias";
import Privacidad from "../../components/Privacidad/Privacidad";
import Newsletter from "../../components/Newsletter/Newsletter";
import Navmui from "../../components/Navmui/Navmui";

export default function Search() {
    const [result, setResult] = useState(null)
    const params = useParams()
    useEffect(() => {
        async function searchFetch() {
            const response = await fetch(`http://localhost:3001/product/pelicula/${params.pelicula}`)
            const data = await response.json()
            setResult(data)
        }
        searchFetch()
    }, [])
    return (
        <>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xl={12}>
                    <Navmui />
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{p:3}}>
            <CardsHome tipoproducto={ result} />
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
    )
}