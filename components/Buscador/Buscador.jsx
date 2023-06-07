import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Buscador() {
  const [pelicula, setPelicula] = useState("")
  

  function handleInput(e) {
    setPelicula(e.target.value)
  }
  return (
    <>
      
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Inicia tu busqueda..."
        color="white"
        variant="filled"
        size="small"
        sx={{ width: "40%" }}
        value={pelicula}
        onChange={handleInput}
      />
       <Link  to={`/search/${pelicula}`}> <SearchIcon sx={{ ml: 2, color:"white"}}  /></Link>
        
    </>
  );
}

