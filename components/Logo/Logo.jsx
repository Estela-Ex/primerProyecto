import AdbIcon from "@mui/icons-material/Adb";
import {Typography, Grid} from "@mui/material";


export default function Logo({ size }, { color }) {
  return (
    <>
    <Grid sx={{m:2, mt:5, ml:"25%"}}>
        <AdbIcon  fontSize="large" sx={{color:"#568203"}}/>
      
      <Typography variant="subtitle" align="right">
        Las Cositas De Mibel
      </Typography>
      </Grid>
      
    </>
  );
}
