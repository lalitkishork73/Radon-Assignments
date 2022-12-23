import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/auth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    console.log(location.pathname);
    return (
        auth?.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;