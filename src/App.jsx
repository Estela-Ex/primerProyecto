import Home from "../views/Home/Home";
import { ThemeProvider } from "@emotion/react";
import Login from "../views/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { theme } from "../styles/styles";
import Registre from "../views/Registre/Registre";
import Categories from "../views/Categories/Categories";
import AuthContextProvider from "./context/AuthContext";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoutes";
import DetailsCategories from "../views/Categories/DetailsCategories";

const allowedRoles = { admin: 0, user: 1 };

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route element={<PublicRoutes />}>
                <Route path="/" element={<Home />} />
              </Route>
              {/* <Route element={<PrivateRoute allowedRoles={[allowedRoles.user]} />}> */}
              <Route path="/Login" element={<Login />} />
              <Route path="/Registre" element={<Registre />} />
              <Route path="/Categories" element={<Categories />}/>
                <Route
                  path="/DetailsCategories"
                  element={<DetailsCategories />}
                />
                
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
