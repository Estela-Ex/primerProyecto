import { TextField, Box, Button, Typography, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch'
export default function Sesion() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const guid = 100;
  // async function userBbdd() {
  //   const response = await fetch(`http://localhost:8000/clientes/`);
  //   const data = await response.json();
  //   setUser(data);
  // }
  // useEffect(() => {
  //   userBbdd();
  // }, []);


  function login() {
    user.map((item) => {
      if (email === item.email && password === item.password) {
        navigate('/')
      } else {
        console.log("los datos no son correctos");
      }
    })
    
    
  }
  function hadleEmail(e) {
    setEmail(e.target.value)
  }
  function hadlePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Inicia Sesión
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2,
          border: "1px solid grey",
          borderRadius: 2,
        }}
      >
        <TextField
          label="Email"
          onChange={hadleEmail}
          value={email}
          size="small"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          onChange={hadlePassword}
          value={password}
          size="small"
          sx={{ mb: 2 }}
        />
        <span>
          Recordar contraseña <Checkbox defaultChecked />
        </span>
        <Button onClick={login} variant="contained" sx={{ mb: 2 }}>
          Login
        </Button>
      </Box>
    </>
  );
}
