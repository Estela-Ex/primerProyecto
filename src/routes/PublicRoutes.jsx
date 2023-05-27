import { useAuthContext } from '../context/AuthContext';
import {Navigate, Outlet, useLocation} from 'react-router-dom'

export default function PublicRoutes() {
    const { user } = useAuthContext();
    const location = useLocation();

    if (user) {
        console.log("holaaaaaaaaaaaaaaaaaaaa")
        return <Navigate to={"/Categories"} state={{from:location}} replace/>
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}