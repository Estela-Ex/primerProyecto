import { useContext, useState, createContext } from 'react';

const AuthContext = createContext({
    login: () => { },
    logout: () => { },
    user: null,
    errorMessage: "",
});

export default function AuthContextProvider({children}) {
    const [user, setUser] = useState(null);
    
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