import {useAuthContext} from "../../context/AuthContext";
import { BasicFormSchemaLogin } from "./BasicFormSchemaLogin";
import { initialValues } from "./formLogin";
import { useFormik } from "formik";
import { TextField, Box, Button, Typography, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";



export default function BasicFormLogin() {
  const { login, logout, user } = useAuthContext();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: BasicFormSchemaLogin,
    onSubmit: login,
  });
  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center", color:"#fff" }}>
        Inicia Sesión
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
            border: "1px solid grey",
            borderRadius: 2,
            color: "white"
          }}
        >
          <TextField
            id="email"
            label="Introduce tu email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            sx={{ mb: 2, label:{color:"white"},fieldset:{borderColor:"white"} }}
            error={errors.email && touched.email}
            helperText={errors.email}
            
            
          />
          <TextField
            id="password"
            label="Introduce tu contraseña"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            sx={{ mb: 2 ,label:{color:"white"}, fieldset:{borderColor:"white"}}}
            error={errors.password && touched.password}
            helperText={errors.password}
          />
          <span>
            Recordar contraseña <Checkbox defaultChecked />
          </span>
          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            sx={{ mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </form>
      <Link to={"/Registre"}>¿Aun sin cuenta?Registrate</Link>
    </>
      )
    }
    {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
