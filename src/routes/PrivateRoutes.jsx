import { useAuthContext } from '../context/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


export default function PrivateRoutes({ allowedRoles }) {
    const { user } = useAuthContext();
    const location = useLocation();
    console.log(user)

    return allowedRoles?.includes(user?.role) ? (
        <Outlet/>
    ) : user ? (
            <Navigate to={"/UNAUTHORIZE"}   />
        ) : (
                <Navigate to={"/"}  />
    )
}