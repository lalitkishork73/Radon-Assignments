import { useLocation, Navigate, Outlet } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

const RequireAuth=()=>{
    const {auth}=AuthConsumer();
    const location =useLocation();

    return(
        auth?.user
    )
}