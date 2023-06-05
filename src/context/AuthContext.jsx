import { useContext, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
    login: () => { },
    logout: () => { },
    user: null,
    
});

export default function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    async function login(values, actions) {
        console.log(values);
       const response = await fetch("http://localhost:3001/user/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(values),
       });
       if (response.status === 200) {
         setUser(values);
         await new Promise((resolve) => setTimeout(resolve, 2000));
         actions.resetForm();
       }
    }
    function logout() {
        setUser(null);
        navigate("/");
    }
    const value = {
        user,
        login,
        logout,
       
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
    return useContext(AuthContext)
}